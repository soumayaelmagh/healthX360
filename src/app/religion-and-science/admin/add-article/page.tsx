"use client";
import type { Article } from "@/components/articles/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddArticle() {
  const [articleToAdd, setArticleToAdd] = useState<Article>({
    name: "",
    link: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleToAdd),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Article added successfully:", data);
        // Reset form or show a success message
        router.push("/religion-and-science");
      } else {
        console.error("Failed to add article");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="page-section w-full h-screen flex flex-col items-center justify-center">
      <h1 className="relative  text-center text-xl md:text-3xl xl:text-5xl font-semibold mb-6">
        Add an article
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
          Article name
        </label>
        <input
          type="text"
          name="name"
          className="w-full rounded-full bg-black bg-opacity-5 border border-black px-2 lg:px-4 py-[3px] mb-3 lg:text-lg xl:text-xl"
          onChange={(e) => {
            setArticleToAdd({
              ...articleToAdd,
              name: e.target.value,
            });
          }}
        />
        <label
          htmlFor="link"
          className="text-black px-4 sm:text-lg lg:text-xl xl:text-2xl"
        >
          Article link
        </label>
        <input
          type="text"
          name="link"
          className="w-full rounded-full bg-black bg-opacity-5 border border-black px-2 lg:px-4 py-[3px] lg:text-lg xl:text-xl mb-3 lg:mb-5"
          onChange={(e) => {
            setArticleToAdd({
              ...articleToAdd,
              link: e.target.value,
            });
          }}
        />
        <button
          className="blue-button w-fit flex self-center text-lg md:text-xl xl:text-2xl"
          type="submit"
        >
          Add article
        </button>
      </form>
    </section>
  );
}

export default AddArticle;
