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
  className="w-full h-[30vh] relative
             pt-5 pl-4 pr-0 pb-0            
             md:pt-8 md:pl-8 md:pr-0 md:pb-0    
             bg-secondary backdrop-blur-sm rounded-md mt-3 overflow-hidden flex" 
  ref={featuresRef}
>
 
  <div className="flex-1 space-y-2 md:space-y-3 lg:space-y-4
                 pr-2 md:pr-4 lg:pr-6 xl:pr-8
                 max-w-[65%] sm:max-w-[60%] md:max-w-[55%] lg:max-w-[60%]
                 h-full flex flex-col justify-center 
                 pb-5 md:pb-8  
                 ">
    <h1 className="text-antiflash font-medium text-base sm:text-lg md:text-xl lg:text-3xl md:text-start">
      HealthX360 is a global educational platform explaining the science behind pain
    </h1>
    <p className="hidden md:block text-start text-xs sm:text-sm lg:text-base text-white">
      We translate complex research on physiology, psychology and spiritual well-being into simple lifestyle frameworks
    </p>
    <div className="w-full md:w-fit flex items-center gap-4 text-antiflash ">
      <a
        target="_blank"
        href="https://wa.me/34601061452"
        className="p-[6px] md:p-2 bg-primary rounded-full transition-all duration-1000"
      >
        <FaWhatsapp className="text-xl md:text-3xl" />
      </a>
    </div>
  </div>

  <div  className="relative w-[35%] sm:w-[40%] md:w-[45%] lg:w-[40%] h-full flex-shrink-0">
    <div className="absolute inset-0 z-[1] opacity-70 md:opacity-100">
      <Image
        alt="Decorative background blobs"
        src={logoShadow} 
        fill
        className="object-contain object-center" 
        sizes="(max-width: 768px) 30vw, 25vw"
      />
    </div>

    {/* Guy Image */}
    <div className="relative w-full h-full z-[2]">
      <Image
        alt="a man smiling at his phone"
        src={guy}
        fill
        className="object-contain object-bottom-right" 
        sizes="(max-width: 768px) 35vw, 30vw"
      />
    </div>
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
