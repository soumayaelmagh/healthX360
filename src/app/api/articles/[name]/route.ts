import { connectDb } from "@/app/lib/db";
import Article from "@/app/models/articles";
import type { Article as ArticleType } from "@/components/articles/client";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { name: string } }
) {
  console.log("DELETE request received for article:", params.name);
  try {
    await connectDb();
    const articleToDelete = await Article.findOneAndDelete({
      name: params.name,
    });
    if (articleToDelete) {
      console.log("TINY LOGS: ARTICLE DELETED", articleToDelete);
      return NextResponse.json({
        message: "Article deleted successfully",
        articleToDelete,
      });
    } else {
      console.log("TINY LOGS: ARTICLE NOT FOUND");
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }
  } catch (e) {
    console.error("TINY LOGS ERROR: ", e);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}
