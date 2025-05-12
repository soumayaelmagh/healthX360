import { connectDb } from "@/app/lib/db";
import Article from "@/app/models/articles";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const articles = await Article.find({});
    return NextResponse.json(articles);
  } catch (err) {
    console.error("ENABLE TO FETCH ARTICLES: ", err);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDb();
    const { name, link } = await request.json();

    if (!name || !link) {
      return NextResponse.json(
        { message: "Name and link are required" },
        { status: 400 }
      );
    }

    const newArticle = new Article({ name, link });
    await newArticle.save();

    return NextResponse.json(
      { message: "Article added successfully", newArticle },
      { status: 201 }
    );
  } catch (error) {
    console.error("TINY LOGS Error adding article:", error);
    return new NextResponse("Failed to add article", { status: 500 });
  }
}
