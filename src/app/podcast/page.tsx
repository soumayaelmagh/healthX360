"use client";

import PodcastCard from "@/components/podcasts/clientCard";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import ClientPodcast from "@/components/podcasts/client";

export type Podcast = {
  title: string;
  youtubeId: string;
};

function PodcastPage() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("unsigned user");
    },
  });

  // console.log(session);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/videos");
        const data = await res.json();
        // console.log(data);
        setVideos(data || []); // Update state with fetched videos
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    }

    fetchVideos(); // Call the function on component mount
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <section className="page-section w-full h-auto min-h-screen">
   
      <ClientPodcast podcasts={videos} />
      {session ? (
        <Link
          href="/api/auth/signout?callbackUrl=/podcast"
          className="text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-4 py-2 border border-black border-opacity-15 transition-all hover:bg-red-400 hover:text-white fixed bottom-10 left-8 "
        >
          <MdLogout className="text-2xl" />
          Logout
        </Link>
      ) : (
        <Link
          href="/api/auth/signin?callbackUrl=/podcast"
          className="text-xs md:text-base xl:text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-3 py-[6px] border border-black border-opacity-15 transition-all hover:bg-emerald-500 hover:text-white fixed bottom-10 left-8 "
        >
          <FaRegUser className="text-sm md:text-lg xl:text-2xl" />
          Login as admin
        </Link>
      )}
    </section>
  );
}

export default PodcastPage;
