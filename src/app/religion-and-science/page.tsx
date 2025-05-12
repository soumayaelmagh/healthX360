"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import Loading from "../loading";
import ClientArticlesPage from "@/components/articles/client";
import type { Article } from "@/components/articles/client";
import { useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";

async function ReligionAndScienceClient() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("unsigned user");
    },
  });

  console.log(session);

  useEffect(() => {
    async function fetchTestByName() {
      try {
        const response = await fetch(`/api/articles`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchTestByName();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!articles) return <Loading />;

  return (
    <section className="w-full h-auto min-h-screen page-section relative flex flex-col items-center gap-5">
    
      {/* <p>{session?.user?.email}</p> */}
      <ClientArticlesPage articles={articles} />
      {session ? (
        <Link
          href="/api/auth/signout?callbackUrl=/religion-and-science"
          className="text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-4 py-2 border border-black border-opacity-15 transition-all hover:bg-red-400 hover:text-white fixed bottom-10 left-8 "
        >
          <MdLogout className="text-2xl" />
          Logout
        </Link>
      ) : (
        <Link
          href="/api/auth/signin?callbackUrl=/religion-and-science"
          className="text-xs md:text-base xl:text-xl flex items-center gap-2 font-bold text-black bg-white rounded-full shadow-lg w-fit px-3 py-[6px] border border-black border-opacity-15 transition-all hover:bg-emerald-500 hover:text-white fixed bottom-10 left-8 "
        >
          <FaRegUser className="text-sm md:text-lg xl:text-2xl" />
          Login as admin
        </Link>
      )}
    </section>
  );
}

export default ReligionAndScienceClient;
