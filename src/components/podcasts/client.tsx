"use client";
import { useState } from "react";
import type { podcastType } from "./clientCard";
import PodcastCard from "./clientCard";

type clientPodcastProps = {
  podcasts: podcastType[];
};

function ClientPodcast(props: clientPodcastProps) {
  const [displayPodcasts, setDisplayPodcasts] =
    useState<clientPodcastProps>(props);

  return (
    <ul className="w-full pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 lg:gap-4 list-none">
      {props.podcasts.map((p, i) => {
        return <PodcastCard key={i} title={p.title} youtubeId={p.youtubeId} />;
      })}
    </ul>
  );
}

export default ClientPodcast;
