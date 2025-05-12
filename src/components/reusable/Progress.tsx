"use client";

import { useEffect, useRef } from "react";
import Reveal from "./PrimaryTextReveal";
import { useInView } from "framer-motion";

type progressValue = {
  value: number;
  label: string;
};

function ProgressBar(props: progressValue) {
  const progressRef = useRef<any>(null);
  let progressValueRef = useRef<any>(null);
  let progress = 0;

  const isInView = useInView(progressRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        const createProgress = setInterval(() => {
          if (progress < props.value) {
            progress++;
            progressValueRef.current.innerText = progress + "%";
            progressRef.current.style.background = `conic-gradient(
                               #f2f2f2  ${(100 - progress) * 3.6}deg,
                               black 1deg,
                               rgb(71 179 98) 1deg
                         )`;
          } else if (progress === props.value) {
            clearInterval(createProgress);
          }
        }, 10);

        return () => {
          clearInterval(createProgress); // Clear the interval on component unmount
        };
      }, 250);
    }
  }, [props.value, isInView, progress]);

  return (
    <div className="flex flex-col items-center w-auto max-w-36 md:max-w-44 xl:max-h-56">
      <div
        className={`w-[72px] h-[72px] lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-2 rounded-full flex justify-center items-center p-[10px] lg:p-3`}
        ref={progressRef}
      >
        <h1
          className="w-full h-full bg-antiflash rounded-full shadow-inner flex justify-center items-center font-medium text-lg xl:text-xl text-black"
          ref={progressValueRef}
        ></h1>
      </div>
      <Reveal
        element={
          <h4 className="text-sm xl:text-base text-black-50 text-center">
            {props.label}
          </h4>
        }
        width="fit-content"
      />
    </div>
  );
}

export default ProgressBar;
