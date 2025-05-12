import { FaRegFile } from "react-icons/fa";
import type { Article } from "./client";

function ClientArticleCard(props: Article) {
  return (
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
      </li>
    </a>
  );
}

export default ClientArticleCard;
