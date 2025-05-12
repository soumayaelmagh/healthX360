import { connectDb } from "@/app/lib/db";
import Podcast from "@/app/models/podcast";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const podcasts = await Podcast.find({});
    return NextResponse.json(podcasts);
  } catch (err) {
    console.error("ENABLE TO FETCH PODCASTS: ", err);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDb();
    const { title, youtubeId } = await request.json();
    if (!title || !youtubeId) {
      return NextResponse.json(
        { message: "title and id are required" },
        { status: 400 }
      );
    }

    const newPodcast = new Podcast({ title, youtubeId });
    await newPodcast.save();
    return NextResponse.json(
      { message: "Article added successfully", newPodcast },
      { status: 201 }
    );
  } catch (error) {
    console.error("TINY LOGS Error adding article:", error);
    return new NextResponse("Failed to add article", { status: 500 });
  }
}
