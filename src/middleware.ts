import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic",
      },
    });
  }
}

async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");
  if (authHeader == null) return Promise.resolve(false);
  const [userName, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return userName === process.env.ADMIN_USERNAME
}

export const config = {
  matcher: "/admin/:path*",
};
