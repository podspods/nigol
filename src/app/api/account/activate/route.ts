import { connect } from '@/db/mongoConfig';
import usersModel from '@/db/userModel';
import { sendEmail } from '@/helpers/mailer';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(request: NextRequest) {
 


  try {
    await connect();
    const reqBody = await request.json();
    const { email } = reqBody;
    const user = await usersModel.findOne({ email });
    if (user)
      if (!user.isVerified) {
        await sendEmail({ email, emailType: 'VERIFY', userId: user._id });
        console.log('mail sent');
      } else {
        console.log('user is already activated');
      }
    else {
      console.log('mail sent -> faux');
    }
    return NextResponse.json({
      message: 'activation sent successfully',
      success: true,
    });
  } catch (error: any) {
    console.error('activate error ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
