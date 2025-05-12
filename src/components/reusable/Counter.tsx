"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./PrimaryTextReveal";

type counterProps = {
  value: number;
  label: string;
  delay?: number;
};

function Counter(props: counterProps) {
  const [counterValue, setCounterValue] = useState<number>(0);
  const counterRef = useRef<any>(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(
        () => {
          for (let i = 0; i <= props.value; i++) {
            setTimeout(() => {
              setCounterValue(i);
            }, 80 * i);
          }
        },
        !props.delay ? 250 : props.delay
      );
    }
  }, [isInView, props?.delay, props?.value]);

  return (
    <div
      className="flex flex-col items-center md:gap-3 xl:gap-5 w-auto max-w-36 md:max-w-44 xl:max-h-56"
      ref={counterRef}
    >
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold">
        + {counterValue}
      </h1>
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

export default Counter;
