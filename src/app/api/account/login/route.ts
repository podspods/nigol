import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import usersModel from '@/db/userModel';
import { connect } from '@/db/mongoConfig';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log('Login POST reqBody 11==>', reqBody);
    const user = await usersModel.findOne({ email: email.toLowerCase()});

    // user check
    if (!user) {
      return NextResponse.json(
        { error: 'error on +user or password' },
        { status: 401 }
      );
    }
    // password check
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: 'error on user or +password' },
        { status: 401 }
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        { error: 'Account not activated' },
        { status: 403 }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    // create token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: '1d'
    });

    const response = NextResponse.json({
      message: 'Login successfull',
      success: true
    });
    response.cookies.set(process.env.SIGNUP_TOKEN_NAME!, token, {
      httpOnly: true
    });
    return response;
  } catch (error: any) {
    console.error('Login POST error ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
