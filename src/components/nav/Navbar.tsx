"use client";

import { useEffect, useRef } from "react";
import Panel from "./Panel";
import { togglenav } from "@/redux/navSlice";
import { useDispatch, useSelector } from "react-redux";
import * as ReactScroll from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import mobileLogo from "@/assets/images/mobile-logo.svg";
import { GoArrowUpRight } from "react-icons/go";

function Navbar() {
  const navBurgerRef = useRef<any>(null);
  const dispatch = useDispatch();
  const isNavOpened = useSelector((state: any) => state.nav.isOpened);

  const toggleNavButton = (): void => {
    // navBurgerRef.current?.classList.toggle("burger-opened");
    dispatch(togglenav());
  };

  useEffect(() => {
    if (isNavOpened) {
      navBurgerRef.current?.classList.add("burger-opened");
    } else {
      navBurgerRef.current?.classList.remove("burger-opened");
    }
  }, [isNavOpened]);

  return (
    <>
      <header className="fixed bg-secondary md:bg-transparent bg-opacity-50 w-full px-5 py-5 md:px-10 md:py-6 xl:px-16 xl:py-8 flex justify-between items-center z-[999] overflow-hidden">
        <Link
          href="/"
          className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold"
        >
          {/* Health<span className="text-primary">x360</span> */}
          <Image
            width={50}
            height={25}
            alt="logo"
            src={mobileLogo}
            className="h-10 w-auto lg:hidden"
          ></Image>
          <Image
            width={50}
            height={25}
            alt="logo"
            src={logo}
            className="h-14 w-auto hidden lg:flex"
          ></Image>
        </Link>

        <nav className="hidden md:flex md:gap-5 lg:gap-8 xl:gap-14 items-center text-secondary font-medium xl:text-xl">
          <Link href="/podcast">Deep dive</Link>
          <Link href="/religion-and-science">Religion and science</Link>
          <Link href="/evaluation">Virtual check</Link>
          <Link href="/blog">Blog</Link>
          {/* <ReactScroll.Link
            smooth={true}
            to="consultant"
            duration={500}
            className="cursor-pointer"
          >
            Meet Motaz
          </ReactScroll.Link> */}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="alt-button text-sm md:text-base lg:text-lg xl:text-xl md:px-5 md:py-1 md:hidden"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="hidden md:flex cta-button text-sm md:text-base lg:text-lg xl:text-xl md:px-5 md:py-1"
          >
            Contact
          </Link>
          <a
            href="https://healthx360.youcanbook.me/"
            className=" hidden lg:flex items-center gap-2 cta-button lg:text-lg xl:text-xl lg:pl-5 lg:pr-2 lg:py-1"
          >
            Book Now
            <GoArrowUpRight className="text-2xl p-[3px] bg-antiflash rounded-full text-secondary font-bold " />
          </a>
          <button
            className="relative md:hidden flex flex-col gap-4 items-center justify-between w-7 h-7 py-[6px]"
            onClick={() => toggleNavButton()}
          >
            <div
              className="burger-btn transition-all duration-200"
              ref={navBurgerRef}
            ></div>
          </button>
        </div>
      </header>
      <Panel />
    </>
  );
}

export default Navbar;
