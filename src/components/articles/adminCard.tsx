"use client";
import { FaRegFile } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import type { Article } from "./admin";
import { useState } from "react";

function AdminArticleCard(props: Article) {
  const [deletionPanel, setPanel] = useState<boolean>(false);

  const deleteArticle = async (name: string) => {
    try {
      const response = await fetch(`/api/articles/${name}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("TINY LOGS: ARTICLE DELETED");
      } else {
        console.error("Failed to delete the article");
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    } finally {
      setPanel(false);
    }
  };

  return (
    <>
      <div
        className={`w-full h-screen  fixed bg-black left-0 top-0 bg-opacity-5 backdrop-blur-md z-[110] ${
          deletionPanel ? "flex" : "hidden"
        } justify-center items-center`}
      >
        <div className="w-fit flex flex-col items-center gap-3 md:gap-6 bg-secondary rounded-lg px-5 py-4 md:p-10 ">
          <h1 className="font-semibold text-xl md:text-3xl xl:text-5xl text-white">
            Confirm article deletion
          </h1>
          <div className="w-full flex items-center justify-between gap-3">
            <button
              className="alt-button text-lg md:text-2xl xl:text-4xl w-[45%]"
              onClick={(e) => {
                e?.preventDefault();
                setPanel(false);
              }}
            >
              Cancel
            </button>
            <button
              className="alt-button bg-red-500 text-lg md:text-2xl xl:text-4xl w-[45%]"
              onClick={async () => {
                await deleteArticle(props.name);
                window.location.reload();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>{" "}
      <a
        href={
          props.link.startsWith("http") ? props.link : `https://${props.link}`
        }
        target="_blank"
        className="relative w-full h-full  col-span-1 row-span-1  overflow-hidden"
      >
        <li className="relative article-item text-white font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
          {props.name}
          <FaRegFile className="absolute text-8xl xl:text-[8rem] text-white flip-horizontally -right-7 -bottom-4" />
          <button
            className="absolute w-fit bg-red-500 p-1 rounded-sm left-2 bottom-2"
            onClick={(e) => {
              e?.preventDefault();
              setPanel(true);
            }}
          >
            <MdDelete className="text-white" />
          </button>
        </li>
      </a>
    </>
  );
}

export default AdminArticleCard;
