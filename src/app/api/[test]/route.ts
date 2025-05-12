import { connectDb } from "@/app/lib/db";
import Test from "@/app/models/tests";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const name = req.nextUrl.searchParams.get("name");
    // const { searchParams } = new URL(req.url);
    // const name = searchParams.get("name");
    const test = await Test.findOne({ title: name });
    if (!test) {
      return new NextResponse("Test not found", { status: 404 });
    }
    return NextResponse.json(test);
  } catch (e) {
    console.error("Error:", e);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}
