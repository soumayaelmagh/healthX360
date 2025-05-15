"use client";
import Image from "next/image";
import guy from "@/assets/images/hero-guy.svg";
import logoShadow from "@/assets/images/green-logo-shadow.svg";
import LinkCard from "../reusable/LinkCard";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as ReactScroll from "react-scroll";

function Hero() {
  const titleRef = useRef<any>(null);
  const paragraphRef = useRef<any>(null);
  const featuresRef = useRef<any>(null);
  const primaryContactButtonRef = useRef<any>(null);
  const primaryBookButtonRef = useRef<any>(null);
  const phoneButtonRef = useRef<any>(null);

  const [isCopied, setIsCopied] = useState(false);

  const phoneOnClick = (): void => {
    setIsCopied(true); // Set state to true when button is clicked
    navigator.clipboard.writeText("0034601061452"); // Copy phone number to clipboard
    setTimeout(() => {
      setIsCopied(false); // Reset state after 2 seconds
    }, 2000);
  };

  useEffect(() => {
    titleRef.current?.classList.add("animate-primary-text");
    setTimeout(() => {
      setTimeout(() => {
        featuresRef.current?.classList.add("scale-reveal");
        setTimeout(() => {
          primaryContactButtonRef.current?.classList.add(
            "animate-primary-button"
          );
          primaryBookButtonRef.current?.classList.add(
            "animate-primary-book-button"
          );
        }, 200);
      }, 200);
      paragraphRef.current?.classList.add("animate-primary-text");
    }, 200);
  }, []);

  return (
    <section className="page-section relative w-full h-[70vh] flex flex-col gap-4 md:justify-center items-center md:items-start  overflow-hidden text-center">
      <div
        className="w-full h-[30vh] relative py-5 px-4 md:p-8 bg-secondary backdrop-blur-sm rounded-md mt-3 overflow-hidden"
        ref={featuresRef}
      >
        <Image
          width={50}
          height={50}
          alt="logo"
          src={logoShadow}
          className="w-full max-w-72 translate-x-[15%] absolute h-auto right-0 bottom-0"
        ></Image>
        <Image
          width={50}
          height={50}
          alt="a man smiling at his phone"
          src={guy}
          className="w-2/3 max-w-52 absolute h-auto right-0 bottom-0"
        ></Image> <h1 className="text-antiflash font-medium text-base sm:text-l md:text-l lg:text-3xl lg:w-6/6  mb-2 lg:mb-4 md:text-start">
        HealthX360 is a global educational platform explaining the science behind pain
        </h1>
       
        <p className="hidden md:flex text-start text-m lg:text-m text-white w-3/3 mb-5 lg:mb-8">
         We translate complex research on physiology, psychology and spiritual well-being into simple lifestyle frameworks

        </p>
        <div className="w-full md:w-fit justify-center flex items-center gap-4 text-antiflash ">
         
          <a
            target="_blank"
            href="https://wa.me/34601061452"
            className="p-[6px] md:p-2 bg-primary rounded-full transition-all duration-1000"
          >
            <FaWhatsapp className="text-xl md:text-3xl" />
          </a>
        </div>
      </div>
      <h1
        className="text-xl md:text-3xl xl:text-4xl font-semibold mt-5 md:mt-0 xl:leading-[60px] transition-all duration-200 opacity-0 md:text-start"
        ref={titleRef}
      >
       Helping people understand pain, holistically through research
      </h1>
      <div className="w-full md:w-fit h-auto flex items-center gap-2 md:gap-4 justify-between">
        <a
          href="https://healthx360.youcanbook.me/"
          target="_blank"
          className="cta-button text-lg md:text-xl xl:text-2xl"
        >
          Book now
        </a>
        <ReactScroll.Link
          smooth={true}
          to="consultant"
          duration={500}
          className="primary-button text-lg md:text-xl xl:text-2xl cursor-pointer"
        >
          Our expert
        </ReactScroll.Link>
      </div>
    </section>
  );
}

export default Hero;
