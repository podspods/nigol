import { connect } from '@/db/mongoConfig';
import usersModel from '@/db/userModel';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { getSession } from '@/helpers/helpers';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  const session = await getSession(request);
  // Check if the user is authenticated
  if (!session) {
    return NextResponse.json(
      { error: 'User is not authenticated' },
      { status: 401 }
    );
  }

  try {
    const userId = await getDataFromToken(request);
    console.log(' function GET(request: NextRequest) userId==>', userId);

    const user = await usersModel.findOne({ _id: userId }).select('-password');
    // console.log(' await axios.get user 16==>', user);

    return NextResponse.json({ message: 'user found', data: user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
