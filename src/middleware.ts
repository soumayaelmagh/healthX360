import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  function middleware(req: NextRequest | any) {
    console.log(req.nextUrl?.pathname);
    console.log(req.nextauth?.token?.role);

    if (req.nextUrl.pathname == "/religion-and-science") {
      if (req.nextauth?.token?.role == "admin") {
        // console.log("TINY LOGS: ADMIN USER");
        return NextResponse.redirect(
          new URL("/religion-and-science/admin", req.url)
        );
      }
    }
    if (req.nextUrl.pathname.startsWith("/religion-and-science/admin")) {
      if (req.nextauth?.token?.role !== "admin") {
        return NextResponse.redirect(
          new URL("/religion-and-science/access-denied", req.url)
        );
      }
    }
    if (req.nextUrl.pathname == "/podcast") {
      if (req.nextauth?.token?.role == "admin") {
        // console.log("TINY LOGS: ADMIN USER");
        return NextResponse.redirect(new URL("/podcast/admin", req.url));
      }
    }
    if (req.nextUrl.pathname.startsWith("/podcast/admin")) {
      if (req.nextauth?.token?.role !== "admin") {
        return NextResponse.redirect(
          new URL("/podcast/access-denied", req.url)
        );
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to the admin route only if signed in
        if (req.nextUrl.pathname.startsWith("/religion-and-science/admin")) {
          return !!token;
        }
        if (req.nextUrl.pathname.startsWith("/podcast/admin")) {
          return !!token;
        }
        // Allow access to other routes even if not signed in
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/religion-and-science/admin",
    "/religion-and-science/admin/add-article",
    "/religion-and-science",
    "/podcast/admin",
    "/podcast",
    "/podcast/admin/add-podcast",
  ],
};
