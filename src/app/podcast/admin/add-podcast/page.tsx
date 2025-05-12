"use client";
import type { Podcast } from "../../page";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddPODCAST() {
  const [podcastToAdd, setPodcastToAdd] = useState<Podcast>({
    title: "",
    youtubeId: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(podcastToAdd),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Article added successfully:", data);
        // Reset form or show a success message
        router.push("/podcast");
      } else {
        console.error("Failed to add videp");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="page-section w-full h-screen flex flex-col items-center justify-center">
      <h1 className="relative  text-center text-xl md:text-3xl xl:text-5xl font-semibold mb-6">
        Add a video
      </h1>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="w-full sm:w-5/6 lg:w-2/3 flex flex-col gap-1 lg:gap-2"
      >
        <label
          htmlFor="name"
          className="text-black px-4 sm:text-lg lg:text-xl xl:text-2xl"
        >
          title
        </label>
        <input
          type="text"
          name="name"
          className="w-full rounded-full bg-black bg-opacity-5 border border-black px-2 lg:px-4 py-[3px] mb-3 lg:text-lg xl:text-xl"
          onChange={(e) => {
            setPodcastToAdd({
              ...podcastToAdd,
              title: e.target.value,
            });
          }}
        />
        <label
          htmlFor="title"
          className="text-black px-4 sm:text-lg lg:text-xl xl:text-2xl"
        >
          Video id
        </label>
        <input
          type="text"
          name="title"
          className="w-full rounded-full bg-black bg-opacity-5 border border-black px-2 lg:px-4 py-[3px] lg:text-lg xl:text-xl mb-3 lg:mb-5"
          onChange={(e) => {
            setPodcastToAdd({
              ...podcastToAdd,
              youtubeId: e.target.value,
            });
          }}
        />
        <button
          className="blue-button w-fit flex self-center text-lg md:text-xl xl:text-2xl"
          type="submit"
        >
          Add podcast
        </button>
      </form>
    </section>
  );
}

export default AddPODCAST;
