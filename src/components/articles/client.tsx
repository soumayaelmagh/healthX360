"use client";
import { useEffect, useState } from "react";
import ClientArticleCard from "./clientCard";
import { useSelector } from "react-redux";

export type Article = {
  name: string;
  link: string;
};

type ClientArticlesPageProps = {
  articles: Article[];
};

function ClientArticlesPage(props: ClientArticlesPageProps) {
  const filters = useSelector((state: any) => state.ras);
  const [displayArticles, setDisplayArticles] = useState<Article[]>(
    props.articles
  );

  useEffect(() => {
    let filteredArticles = [...props.articles];

    // Apply sorting
    if (filters?.sortingMethod === "MOST_RECENT") {
      filteredArticles = filteredArticles.reverse();
    } else if (filters?.sortingMethod === "ALPHABETICAL") {
      filteredArticles.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Apply search filtering
    if (filters?.searchInput) {
      filteredArticles = filteredArticles.filter((article) =>
        article.name.toLowerCase().includes(filters.searchInput.toLowerCase())
      );
    }

    // Update state with the sorted and filtered articles
    setDisplayArticles(filteredArticles);
  }, [props.articles, filters]);

  return (
    <ul className="w-full pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 lg:gap-4 list-none">
      {displayArticles.map((article, i) => {
        return (
          <ClientArticleCard key={i} name={article.name} link={article.link} />
        );
      })}
    </ul>
  );
}

export default ClientArticlesPage;
