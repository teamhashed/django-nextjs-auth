// export { default } from "next-auth/middleware"

import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
export { default } from 'next-auth/middleware';


// export async function middleware(req: NextRequest, res: NextResponse, event: NextFetchEvent) {
//     const secret = process.env.NEXTAUTH_SECRET;
//     const token = await getToken({ req: req, secret: secret});
//     // console.log("isAuthenticated token --> ", token);
//     if (!!token && !token.expired) {
//         if (req.nextUrl.pathname.startsWith('/api/auth/signin')) {
//             console.log("isAuthenticated url on signin");
//             return NextResponse.redirect(new URL('/', req.url));
//         }
//     }
// }

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|TRA-Logo.png).*)"]
}