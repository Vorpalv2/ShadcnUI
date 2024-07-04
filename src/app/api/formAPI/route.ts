import { NextRequest, NextResponse } from "next/server";

async function GET(data: Body) {
  let body = await data;
  console.log(body);
}

async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  console.log("working");

  return NextResponse.json({ body });
}

export { GET, POST };
