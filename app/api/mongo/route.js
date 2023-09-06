import { NextRequest, NextResponse } from "next/server";

// next.js api routes
export async function GET(request) {
  return NextResponse.json({ msg: "Hello from NextJS API!" });
}
