import usersModel from '@/db/userModel';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, username } = reqBody;
    console.log('POST signup reqBody 11=====>', reqBody);

    const result = await usersModel.findOneAndUpdate({email}, {
      $set: { username }
    });

    return NextResponse.json({
      message: 'User updated  successfully',
      success: true,
      result
    });
  } catch (error: any) {
    console.error('Update User  POST ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
