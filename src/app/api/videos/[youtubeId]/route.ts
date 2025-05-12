import { connectDb } from "@/app/lib/db";
import Podcast from "@/app/models/podcast";
// import type { podcastType } from "@/components/podcats/clientCard";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { youtubeId: string } }
) {
  console.log("DELETE request received for podcast:", params.youtubeId);
  try {
    await connectDb();
    const podcastToDelete = await Podcast.findOneAndDelete({
      youtubeId: params.youtubeId,
    });
    if (podcastToDelete) {
      console.log("TINY LOGS: PODCAST DELETED", podcastToDelete);
      return NextResponse.json({
        message: "Podcast deleted successfully",
        podcastToDelete,
      });
    } else {
      console.log("TINY LOGS: PODCAST NOT FOUND");
      return NextResponse.json(
        { message: "Podcast not found" },
        { status: 404 }
      );
    }
  } catch (e) {
    console.error("TINY LOGS ERROR: ", e);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}
