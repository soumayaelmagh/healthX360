"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type textRevealProps = {
  element: JSX.Element;
  //   type: string;
  width?: "fit-content" | "100%";
};

function Reveal(props: textRevealProps) {
  const revealRef = useRef<any>(null);
  const isInView = useInView(revealRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      style={{ position: "relative", width: props.width, overflow: "hidden" }}
      ref={revealRef}
    >
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0.2, filter: "blur(4px)" },
          visible: { y: 0, opacity: 1, filter: "blur(0)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {props.element}
      </motion.div>
    </div>
  );
}

export default Reveal;
