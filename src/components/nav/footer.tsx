"use client";

import Image from "next/image";
import Logo from "@/assets/images/mobile-logo.svg";
import Link from "next/link";
import * as ReactScroll from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <footer className="w-full h-auto px-5 py-8 md:p-10 lg:px-20 xl:px-24 bg-black-05 flex flex-col items-center gap-10">
      {/* Logo and Title */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          Health<span className="text-primary">X360</span>
        </h1>
        <Image
          width={30}
          height={30}
          alt="Logo"
          className="w-7 md:w-10 xl:w-16"
          src={Logo}
        />
      </div>

      {/* Footer Sections */}
      <div className="w-full flex flex-col sm:flex-row justify-between gap-8 sm:gap-16">
        {/* Section 1: Explore */}
        <div className="flex flex-col gap-3 text-black font-medium text-sm md:text-base xl:text-xl">
          <h2 className="font-semibold text-lg mb-2">Explore</h2>
          <Link href="/podcast">Deep Dive</Link>
          <Link href="/religion-and-science">Religion and Science</Link>
          <Link href="/evaluation">Virtual Check</Link>
          <ReactScroll.Link
            smooth={true}
            to="consultant"
            duration={500}
            className="cursor-pointer"
          >
            Our health educator
          </ReactScroll.Link>
        </div>

        {/* Section 2: Legal & Support */}
        <div className="flex flex-col gap-3 text-black font-medium text-sm md:text-base xl:text-xl">
          <h2 className="font-semibold text-lg mb-2">Support</h2>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-services">Terms and Services</Link>
          <Link href="/contact">Partner or refer? Contact us.</Link>
        </div>

        {/* Section 3: Contact Info */}
        <div className="flex flex-col gap-3 text-black font-medium text-sm md:text-base xl:text-xl">
          <h2 className="font-semibold text-lg mb-2">Contact</h2>
          <div className="flex items-center gap-2">
            <FaWhatsapp style={{ fontSize: "120%" }} /> +34 601061452
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail style={{ fontSize: "120%" }} /> Director@healthX360.com
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
