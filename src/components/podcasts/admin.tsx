"use client";

import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AdminArticleCard from "./adminCard";
import AdminPodcastCard from "./adminCard";
import { set } from "mongoose";

export type Podcast = {
  title: string;
  youtubeId: string;
};

type AdminPodcastPageProps = {
  podcasts: Podcast[];
};

function AdminPodcastPage() {
  const [podcasts, setPodcasts] = useState<Podcast[] | null>(null);

  async function getArticlesFromDb() {
    const res = await fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((err) => console.error("TINY LOGS ERROR: ", err))
      .finally(() => console.log("TINY LOGS FETCHING OPERATION IS DONE"));
  }

  useEffect(() => {
    getArticlesFromDb();
  }, []);

  //   const filters = useSelector((state: any) => state.ras);
  //   const [displayArticles, setDisplayArticles] = useState<Article[] | null>(
  //     null
  //   );

  //   useEffect(() => {
  //     let filteredArticles: Article[] = [];

  //     if (articles != null) {
  //       filteredArticles = [...articles];
  //     }

  //     // Apply sorting
  //     if (filters?.sortingMethod === "MOST_RECENT") {
  //       filteredArticles = filteredArticles.reverse();
  //     } else if (filters?.sortingMethod === "ALPHABETICAL") {
  //       filteredArticles.sort((a, b) => a.name.localeCompare(b.name));
  //     }

  //     // Apply search filtering
  //     if (filters?.searchInput) {
  //       filteredArticles = filteredArticles.filter((article) =>
  //         article.name.toLowerCase().includes(filters.searchInput.toLowerCase())
  //       );
  //     }

  //     // Update state with the sorted and filtered articles
  //     setDisplayArticles(filteredArticles);
  //   }, [articles, filters]);

  return (
    <ul className="w-full pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 lg:gap-4 list-none">
      <li className="relative cursor-pointer w-full h-full min-h-[40vw] sm:min-h-[24vw] lg:min-h-[18vw] xl:min-h-[14vw] p-2 md:p-3 xl:p-5 rounded-lg bg-black bg-opacity-10 ">
        <a
          href="admin/add-podcast"
          className="w-full h-full flex items-center justify-center"
        >
          <FaCirclePlus className="text-4xl text-black text-opacity-50" />
        </a>
      </li>
      {podcasts !== null
        ? podcasts.map((video, i) => {
            return (
              <AdminPodcastCard
                key={i}
                title={video.title}
                youtubeId={video.youtubeId}
              />
            );
          })
        : null}
    </ul>
  );
}

export default AdminPodcastPage;
