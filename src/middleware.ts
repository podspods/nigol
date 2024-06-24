import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { publicRoute, watchinRoute } from './common/constant';
import { route } from './common/api';

// pre-requisite

// | public-route | token | situation                           | action                   |
// | ------------ | ----- | ----------------------------------- | ------------------------ |
// | false        | false | access by url                       | to login page            |
// | false        | true  | normal case                         | do nothing               |
// | true         | false | normal case                         | do nothing               |
// | true         | true  | logged and want to log or subscribe | redirect to private home | can subscribe but not login (again)


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


// we have public path and provate path.
  const isPublicPath: boolean = publicRoute.includes(path);
// check if token in place 
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

