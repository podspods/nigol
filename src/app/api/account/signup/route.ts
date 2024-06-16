import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { sendEmail } from '@/helpers/mailer';
import { connect } from '@/db/mongoConfig';
import usersModel from '@/db/userModel';
connect();

export async function POST(request: NextRequest) {
  try {
    // --------------- retrieve config  -------------------------
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log('POST reqBody 11==>', reqBody);

    // --------------- check user exist in database  email : unique -------------------------

    const user = await usersModel.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'user already exist' },
        { status: 400 }
      );
    }
    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // --------------- create  user  -------------------------
    const newUser = new usersModel({
      username,
      email,
      password: hashedPassword
    });

    // --------------- save   user in database   -------------------------
    const savedUser = await newUser.save();
    console.log('savedUser ==>', savedUser);

    // ------------------------ send verification email to user -----------

    await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

    // ---------- send response -------------------------------------
    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser
    });
  } catch (error: any) {
    console.error('Signup POST ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
