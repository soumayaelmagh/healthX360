"use client";

import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Counter from "../reusable/Counter";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function Pathologies() {
  // SCROLL TRIGGER ANIMATION

  const pathologiesRef = useRef<any>(null);
  const sectionRef = useRef<any>(null);
  const counterRef = useRef<any>(null);
  const isInView = useInView(pathologiesRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        sectionRef.current?.classList.add("scale-reveal");
        setTimeout(() => {
          pathologiesRef.current?.classList.add("active-pathologies");
          setTimeout(() => {
            counterRef.current?.classList.remove("opacity-0");
          }, 200);
        }, 500);
      }, 400);
    }
  }, [isInView]);

  return (
    // PATHOLOGIES SWING
    <section className="relative page-section h-screen flex items-center justify-center">
      <div
        className="relative w-full h-full rounded-lg overflow-hidden max-h-[750px] scale-0"
        ref={sectionRef}
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          preload="none"
          muted
          className="absolute z-0 h-full object-cover"
        >
          <source src="/videos/path.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute top-8 sm:top-8 md:top-16 w-fit left-1/2 -translate-x-1/2 md:left-28 xl:left-36 xl:top-24 md:translate-x-0 scale-110 xl:scale-125 transition-all duration-300 opacity-0"
          ref={counterRef}
        >
          <Counter label="Patterns Decoded" value={40} delay={1500} />
        </div>
        <div
          className="relative w-[90%] sm:w-1/2 mx-auto md:mx-0 h-auto flex flex-col items-center gap-3 xl:gap-5 p-3 xl:p-6 bg-black-05 backdrop-blur-sm my-5 rounded-lg text-center md:text-start md:items-start transition-all duration-700"
          ref={pathologiesRef}
        >
          <h1 className="text-black text-2xl lg:text-3xl xl:text-4xl font-semibold">
          Chronic complexity, clarified through research
          </h1>
          <p className="text-black-75 text-sm lg:text-base xl:text-lg">
          HealthX360 examines the interconnected science behind persistent health challenges—revealing how physical, psychological, and spiritual factors interact in peer-reviewed frameworks
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="primary-button lg:text-xl xl:text-2xl"
            >
              Contact now
            </Link>
            <a
              target="_blank"
              href="https://wa.me/34601061452"
              className="p-[6px] md:p-2 bg-primary rounded-full transition-all duration-1000"
            >
              <FaWhatsapp className="text-xl md:text-3xl" />
            </a>
          </div>
        </div>
        <ul className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 whitespace-nowrap list-none flex flex-col gap-3 bottom-3 sm:bottom-8 md:bottom-10 md:right-10 xl:text-xl">
          <li className="flex items-center gap-2 font-medium">
            <span className="text-3xl w-8 h-8 border border-black rounded-full flex items-center justify-center">
              +
            </span>{" "}
            Mind Patterns 
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="text-3xl w-8 h-8 border border-black rounded-full flex items-center justify-center">
              +
            </span>{" "}
            Body Systems
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="text-3xl w-8 h-8 border border-black rounded-full flex items-center justify-center">
              +
            </span>{" "}
            Spiritual Dynamics
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pathologies;
