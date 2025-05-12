import * as ReactScroll from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { togglenav } from "@/redux/navSlice";

function Panel() {
  const isNavOpened = useSelector((state: any) => state.nav.isOpened);
  const dispatch = useDispatch();

  return (
    <nav
      className={`z-[101] fixed w-full h-auto md:hidden bg-antiflash shadow-xl pt-28 pb-8 flex flex-col justify-center items-center gap-4 transition-all duration-200 ${
        isNavOpened ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ReactScroll.Link
        smooth={true}
        to="mission"
        duration={500}
        className=""
        onClick={() => {
          dispatch(togglenav());
        }}
      >
        Our Mission
      </ReactScroll.Link>
      {/* <ReactScroll.Link
        smooth={true}
        to="whyus"
        duration={500}
        className=""
        onClick={() => {
          dispatch(togglenav());
        }}
      >
        Why us
      </ReactScroll.Link> */}
      <ReactScroll.Link
        onClick={() => {
          dispatch(togglenav());
        }}
        smooth={true}
        to="consultant"
        duration={500}
        className=""
      >
        Meet Motaz
      </ReactScroll.Link>
      <Link
        href="/podcast"
        onClick={() => {
          dispatch(togglenav());
        }}
      >
        Deep dive
      </Link>
      <Link
        href="/evaluation"
        onClick={() => {
          dispatch(togglenav());
        }}
      >
        Virtual check
      </Link>
      <Link
        href="/religion-and-science"
        onClick={() => {
          dispatch(togglenav());
        }}
      >
        Religion and science
      </Link>
      <a
        href="https://healthx360.youcanbook.me/"
        className="blue-button lg:text-lg xl:text-xl"
      >
        Book Now
      </a>
    </nav>
  );
}

export default Panel;
