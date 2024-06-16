import { SIGNUP_TOKEN } from '@/middleware';
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const getDataFromToken = (request: NextRequest) => {
  try {

    const token = request.cookies.get(process.env.SIGNUP_TOKEN_NAME!)?.value || '';
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    // console.log(' getDataFromToken decodedToken12==>', decodedToken);

    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
