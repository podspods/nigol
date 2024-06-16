import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { publicRoute, watchinRoute } from './common/constant';
import { route } from './common/api';

export const SIGNUP_TOKEN = process.env.SIGNUP_TOKEN_NAME;
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

// exlude access to API
// console.log(' request.nextUrl.pathname.startsWith(api==>',path );

// if (path.startsWith('/api')) {
//   // Renvoie une réponse indiquant que l'accès est refusé
//   // console.log(' request.nextUrl.pathname.startsWith(api==>',path );
  
//   return new Response('403 Forbidden', { status: 403 });
// }



  const isPublicPath: boolean = publicRoute.includes(path);

  const signupToken =
    request.cookies.get(process.env.SIGNUP_TOKEN_NAME!)?.value || '';

  if (isPublicPath && signupToken) {
    return NextResponse.redirect(new URL(route.home.private, request.nextUrl));
  }
  if (!isPublicPath && !signupToken) {
    return NextResponse.redirect(new URL(route.home.public, request.nextUrl));
  }
}


// ------------------------route to match

// See "Matching Paths" below to learn more


export const config = {
  
  // matcher : ['/', route.home.public,  ]
  // matcher : [...publicRoute, '/', route.about]
  matcher: [ '/', '/account/profile', '/account/login', '/account/signup', '/account/verifyemail']
};

