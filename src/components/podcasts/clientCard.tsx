import { FaRegCirclePlay } from "react-icons/fa6";

export type podcastType = {
  title: string;
  youtubeId: string;
};

function PodcastCard(props: podcastType) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${props.youtubeId}`}
      className="relative w-full h-full  col-span-1 row-span-1  overflow-hidden"
      target="_blank"
      rel="noopener noreferrer" // Security feature to prevent the new page from accessing the window.opener object
    >
      <li className="relative article-item text-white font-medium text-sm sm:text-base lg:text-lg xl:text-xl">
        {props.title}
        <FaRegCirclePlay className="absolute text-8xl xl:text-[8rem] text-primary -right-7 -bottom-4" />
      </li>
    </a>
  );
}

export default PodcastCard;
