import { connectDb } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const connection = await connectDb();
    return NextResponse.json("Connected successfully");
  } catch (err) {
    console.error("UNABLE TO CONNECT: " + err);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}
