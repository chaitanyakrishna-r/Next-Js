import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  
  const { pathname } = req.nextUrl;

  
  const publicRoutes = ["/login", "/register", "/api/auth"];
  if (publicRoutes.some((path) => pathname.startsWith(path))) {
    console.log("runing middleware");
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // ✅ ADD THIS: If token exists, allow the request to proceed to the page!
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.json).*)"]
};