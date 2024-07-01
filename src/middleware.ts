import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

console.log("hello");
export async function middleware(request: NextRequest) {
  const session = request.cookies.get("authjs.session-token");
  const { href, origin, pathname } = request.nextUrl;
  if (pathname == "/dashboard") {
    if (session != undefined) {
      return NextResponse.redirect(origin);
    } else {
      return NextResponse.redirect(origin + "/newuser/register");
    }
  }
}

export const config = {
  matcher: ["/", "/dashboard"],
};
