"use client";

//import { useInView, useAnimation, motion } from "framer-motion";
import {  useRef } from "react";
import Counter from "../reusable/Counter";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function Pathologies() {
  const divStyle = {
    marginLeft: '700px', 
  };
  const counterRef = useRef<any>(null);
  


  return (
    // PATHOLOGIES SWING
    <section className="relative page-section h-screen flex items-center justify-center">
      <div
        className="relative w-full h-full rounded-lg overflow-hidden max-h-[90vh] "
        
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
          className="absolute top-8 sm:top-8 md:top-16 w-fit left-1/2 -translate-x-1/2 md:left-28 xl:left-36 xl:top-24 md:translate-x-0 scale-110 xl:scale-125"
        >
          <Counter label="Root causes explained" value={40} delay={0} />
        </div>

       <div style={divStyle}
          className="relative w-[90%] sm:w-1/2 mx-auto md:mx-0 h-auto flex flex-col items-center gap-3 xl:gap-5 p-3 xl:p-6 bg-black-05 backdrop-blur-sm my-5 rounded-lg text-center md:text-start md:items-start"
        >
          <h1 className="text-black text-2xl lg:text-3xl xl:text-4xl  font-semibold">
            Research-driven clarity, <br />
            on chronic complexity
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
            Mental Health
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="text-3xl w-8 h-8 border border-black rounded-full flex items-center justify-center">
              +
            </span>{" "}
            Physical Health
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="text-3xl w-8 h-8 border border-black rounded-full flex items-center justify-center">
              +
            </span>{" "}
            Spiritual Well-being
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pathologies;
