import { NextRequest, NextResponse } from "next/server";

async function GET() {
  return NextResponse.json({ success: "working" });
}
async function POST(request: NextRequest) {
  const Body = await request.json();
  console.log("Logged through API : ", Body);
  return NextResponse.json(Body);
}

export { GET, POST };
