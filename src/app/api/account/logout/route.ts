import { connect } from '@/db/mongoConfig';
import { NextResponse } from 'next/server';

connect();

export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Logout successful',
      success: true
    });
    response.cookies.set(process.env.SIGNUP_TOKEN_NAME!, '', {
      httpOnly: true,
      expires: new Date(0)
    });
    return response;
  } catch (error: any) {
    console.error('Logout  GET error ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
