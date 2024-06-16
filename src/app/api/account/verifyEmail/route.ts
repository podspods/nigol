import { connect } from '@/db/mongoConfig';
import usersModel from '@/db/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  console.log('verify email 15 ==============>');

  try {
    // ------ retrieve  token ------------------------------------
    const reqBody = await request.json();
    const { token } = reqBody;

    // -----check user base on token and token not expired ------------

    const user = await usersModel.findOne({
      verifyToken: token
      // verifyTokenExpiry: { $gt: Date.now() }
    });

    //------ if user found then user token is valid ---------------

    if (!user) {

      return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
    }

    // ----update user to reset token and set verified-----------

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();
    
    // ---------- send response -------------------------------------
    return NextResponse.json({
      message: 'Email verified successfully',
      success: true
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
