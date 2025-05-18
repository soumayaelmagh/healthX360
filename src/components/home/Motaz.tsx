"use client";
import Image from "next/image";
import Motaz from "@/assets/images/motaz.svg";
import { PiDna } from "react-icons/pi";
import Reveal from "../reusable/PrimaryTextReveal";
import coplef from "@/assets/images/coplef-madrid.svg";
import fisioterapeus from "@/assets/images/fisioterapeus.svg";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

function MeetMotaz() {
  return (
    <section
      className="page-section w-full  min-h-fit bg-antiflash flex flex-col md:flex-row md:justify-around items-center md:items-start md:gap-5"
     
      id="consultant"
    >
      <h1 className="mb-8 text-center text-xl md:hidden font-semibold">
     Meet Motaz, Our Health Educator
      </h1>
        <h2 className="mb-8 text-center text-l md:hidden font-semibold">
    Physiotherapist & Sports Scientist | Master’s in Healthcare & Clinical Management
      </h2>
      <article className="hidden md:flex md:flex-col w-2/3">
        <Reveal
          element={
            <h1 className="mb-5 text-xl xl:text-5xl hidden md:flex font-semibold">
              Meet Motaz, Our Health Educator
            </h1>
            
          }
        />
          <Reveal
          element={
            <h2 className="mb-5 text-xl xl:text-xl hidden md:flex font-semibold">
            Physiotherapist & Sports Scientist | Master’s in Healthcare & Clinical Management           
             </h2>
            
          }
        />
        <Reveal
          element={
            <p className="text-black-50 hidden md:flex xl:text-xl">
              (Credentials earned in Madrid; HealthX360 operates as an educational platform only)
            </p>
          }
        />
         <Reveal
          element={
            <p className="text-black-50 hidden md:flex xl:text-xl">
              Motaz translates cutting-edge research across physiology, psychology, 
              and spiritual well-being—revealing how these systems interconnect in persistent health challenges.
            </p>
          }
        />
        <div className="flex items-center gap-2">
          <a
            href="https://healthx360.youcanbook.me/"
            className=" w-fit mt-2 lg:mt-6 mb-5 hidden md:flex items-center gap-2 blue-button text-2xl lg:text-3xl xl:text-4xl pl-5 py-1 lg:pl-6"
          >
            Book Now
            <GoArrowUpRight className="text-2xl xl:text-3xl p-[3px] bg-antiflash rounded-full text-secondary font-bold " />
          </a>
          <a
            target="_blank"
            href="https://wa.me/34601061452"
            className="p-[6px] md:p-2 bg-primary rounded-full transition-all duration-1000 mb-2 lg:mb-0"
          >
            <FaWhatsapp className="text-xl md:text-3xl" />
          </a>
        </div>
        <div className="flex items-end gap-10">
          <div className="flex flex-col items-center justify-end gap-2">
            <Image
              width={30}
              height={30}
              alt="COPLEF Madrid"
              src={coplef}
              className="w-20"
            ></Image>
            <h1 className="text-black text-sm font-medium text-center">
              Membership: 017486
            </h1>
          </div>
          <div className="flex flex-col items-center justify-end gap-2">
            <Image
              width={30}
              height={30}
              alt="Fisioterapeus Madrid"
              src={fisioterapeus}
              className="w-20"
            ></Image>
            <h1 className="text-black text-sm font-medium text-center">
              Membership: 69010
            </h1>
          </div>
        </div>
      </article>
      <div className="w-3/5 sm:w-2/5 md:w-1/3 h-auto flex justify-center items-center">
        <PiDna
          className="absolute dna-1"
          style={{ fontSize: "250%", color: "red" }}
        />
        <PiDna
          className="absolute dna-2"
          style={{ fontSize: "250%", color: "green" }}
        />
        <PiDna
          className="absolute dna-3"
          style={{ fontSize: "250%", color: "blue" }}
        />
        <Image
          width={100}
          height={100}
          src={Motaz}
          alt="Meet Motaz: our health consultant"
          className="w-full xl:w-4/5 z-30"
        ></Image>
      </div>
      <p className="my-5 text-center text-sm sm:text-base md:hidden text-black-50">
              Physiotherapist & Sports Scientist | Master&quot;s in Healthcare & Clinical Management
              (Credentials earned in Madrid; HealthX360 operates as an educational platform only)
              <br />
              Motaz translates cutting-edge research across physiology, psychology, 
              and spiritual well-being—revealing how these systems interconnect in persistent health challenges
              <br />
              Core Insight:
              <br />
              &ldquo;Common doesn’t mean normal. Deeper science changes perspectives.&rdquo;
      </p>
      <div className="flex items-center gap-2 md:hidden">
        <a
          href="https://healthx360.youcanbook.me/"
          className=" mt-2 mb-5 flex  items-center gap-2 blue-button text-2xl lg:text-lg xl:text-xl pl-5 py-1"
        >
          Book Now
          <GoArrowUpRight className="text-2xl p-[3px] bg-antiflash rounded-full text-secondary font-bold " />
        </a>
        <a
          target="_blank"
          href="https://wa.me/34601061452"
          className="p-[6px] md:p-2 bg-primary rounded-full transition-all duration-1000 mb-2"
        >
          <FaWhatsapp className="text-xl md:text-3xl" />
        </a>
      </div>
      <div className="flex items-end gap-10 md:hidden">
        <div className="flex flex-col items-center justify-end gap-2">
          <Image
            width={30}
            height={30}
            alt="COPLEF Madrid"
            src={coplef}
            className="w-20"
          ></Image>
          <h1 className="text-black text-sm font-medium text-center">
            Membership: 017486
          </h1>
        </div>
        <div className="flex flex-col items-center justify-end gap-2">
          <Image
            width={30}
            height={30}
            alt="Fisioterapeus Madrid"
            src={fisioterapeus}
            className="w-20"
          ></Image>
          <h1 className="text-black text-sm font-medium text-center">
            Membership: 69010
          </h1>
        </div>
      </div>
    </section>
  );
}

export default MeetMotaz;
