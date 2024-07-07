import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

console.log("hello");
export async function middleware(request: NextRequest) {
  const currentUser = await auth();
  console.log(currentUser);
  const cookie = request.cookies.get("authjs.session-token");
  const { origin, pathname } = request.nextUrl;
  if (pathname.includes("/dashboard") || pathname.includes("/posts")) {
    console.log(pathname);
    if (currentUser == null) {
      return NextResponse.redirect(origin + "/sign-in  ");
    }
    console.log(origin);
    // return NextResponse.redirect(origin + "/dashboard");
  }
}

export const config = {
  matcher: ["/", "/dashboard", "/posts"],
};
