"use client";
import Image from "next/image";
import Link from "next/link";
import img21 from "@/assets/images/21.svg";
import img22 from "@/assets/images/22.svg";
import img27 from "@/assets/images/27.svg";
import img38 from "@/assets/images/38.svg";
import img39 from "@/assets/images/39.svg";
import { useEffect, useState } from "react";

function Evaluation() {
  // const [tests, setTests] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchTests() {
  //     try {
  //       const response = await fetch("/api/tests");
  //       const data = await response.json();
  //       console.log(data);
  //       setTests(data);
  //     } catch (error) {
  //       console.error("Failed to fetch tests:", error);
  //     } finally {
  //       setLoading(false);
  //       console.log(tests);
  //     }
  //   }

  //   fetchTests();
  // }, []);

  return (
    <section className="w-full h-screen bg-antiflash page-section ">
      <h1 className="text-center text-2xl md:text-5xl xl:text-7xl font-semibold mb-5 xl:mb-20">
        <span className="text-secondary">Virtual</span>{" "}
        <span className="text-primary">Check</span>
      </h1>
      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
    <p className="text-gray-800 text-base leading-relaxed">
    Interactive self-evaluation tools based entirely on peer-reviewed research. These science-backed tests offer insight into patterns that may affect your health — for awareness, not diagnosis.
    </p>
  </div>
      <ul className="list-none w-full flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 justify-between mt-8">
        <li className="framework-item">
          <Link
            className="w-full h-full"
            href="/evaluation/chronic-pain-mindset"
          >
            <Image
              width={30}
              height={30}
              alt="DNA symbol"
              src={img38}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-sm sm:text-base lg:text-2xl xl:text-3xl text-antiflash">
              Chronic Pain Mindset
            </h1>
          </Link>
        </li>
        <li className="framework-item">
          <Link
            className="w-full h-full"
            href="/evaluation/endometriosis-life-impact"
          >
            <Image
              width={30}
              height={30}
              alt="DNA symbol"
              src={img39}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-sm sm:text-base lg:text-2xl xl:text-3xl text-antiflash">
              Endometriosis Life Impact
            </h1>
          </Link>
        </li>
        <li className="framework-item">
          <Link
            className="w-full h-full"
            href="/evaluation/premenstrual-syndrome-scale-(PMSS)"
          >
            <Image
              width={30}
              height={30}
              alt="DNA symbol"
              src={img27}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-sm sm:text-base lg:text-2xl xl:text-3xl text-antiflash">
              Premenstrual syndrome scale
            </h1>
          </Link>
        </li>
        <li className="framework-item">
          <Link
            className="w-full h-full"
            href="/evaluation/the-pain-management-confidence"
          >
            <Image
              width={23}
              height={23}
              alt="DNA symbol"
              src={img38}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-sm sm:text-base lg:text-2xl xl:text-3xl text-antiflash">
              The Pain Management Confidence
            </h1>
          </Link>
        </li>
        <li className="framework-item">
          <Link
            className="w-full h-full"
            href="/evaluation/dysmenorrhea-impact-and-leave-predictor"
          >
            <Image
              width={30}
              height={30}
              alt="DNA symbol"
              src={img21}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-sm sm:text-base lg:text-2xl xl:text-3xl text-antiflash">
              Dysmenorrhea Impact & Leave Predictor
            </h1>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Evaluation;
