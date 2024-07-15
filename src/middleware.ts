import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("middleware");

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/task"],
};
