import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const SIGNUP_TOKEN = process.env.SIGNUP_TOKEN_NAME;
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === '/login' || path === '/signup' || path === '/verifyemail';

  const signupToken = request.cookies.get(SIGNUP_TOKEN!)?.value || '';

  console.log(' middleware 14 ==>', isPublicPath, signupToken ? signupToken : 'false');

  if (isPublicPath && signupToken) {
    console.log(' middleware 17==>', isPublicPath, signupToken);
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  if (!isPublicPath && !signupToken) {
    console.log(' middleware 21==>', isPublicPath, signupToken);
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

// ------------------------route to match

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/profile', '/login', '/signup', '/verifyemail', '/about']
};
