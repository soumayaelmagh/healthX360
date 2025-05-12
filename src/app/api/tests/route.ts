import { connectDb } from "@/app/lib/db";
import Test from "@/app/models/tests";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const tests = await Test.find({});
    return NextResponse.json(tests);
  } catch (err) {
    console.error("ENABLE TO FETCH ALL TESTS", err);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}
