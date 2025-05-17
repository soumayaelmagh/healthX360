"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Testimonial from "../reusable/Testimonial";
import testimonialsData from "@/data/testimonials.json";
import { useState } from "react";
import Reveal from "../reusable/PrimaryTextReveal";

function Testimonials() {
  const [testimonials, setTestimonials] = useState<any>(
    testimonialsData.testimonials
  );

  const [selectedTestimonial, setSelectedTestimonial] = useState<
    number | false
  >(0);

  const incrementTestimonial = () => {
    // @ts-ignore
    if (selectedTestimonial >= 2) {
      setSelectedTestimonial(false);
      setTimeout(() => {
        setSelectedTestimonial(0);
      }, 200);
    } else {
      setSelectedTestimonial(false);
      setTimeout(() => {
        // @ts-ignore
        setSelectedTestimonial(selectedTestimonial + 1);
      }, 200);
    }
  };

  const decrementTestimonial = () => {
    // @ts-ignore
    if (selectedTestimonial <= 0) {
      setSelectedTestimonial(false);
      setTimeout(() => {
        setSelectedTestimonial(2);
      }, 200);
    } else {
      setSelectedTestimonial(false);
      setTimeout(() => {
        // @ts-ignore
        setSelectedTestimonial(selectedTestimonial - 1);
      }, 200);
    }
  };

  return (
    <section className="page-section w-full min-h-fit flex flex-col items-center bg-antiflash">
      <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold mb-5">
      What People Say About HealthX360
      </h1>
      <div className="w-full flex flex-1 gap-8 justify-between items-center">
        <button onClick={decrementTestimonial}>
          <FaChevronLeft className="text-black" style={{ fontSize: "150%" }} />
        </button>
        {selectedTestimonial || selectedTestimonial === 0 ? (
          <Testimonial
            name={testimonials?.[selectedTestimonial]?.name}
            review={testimonials?.[selectedTestimonial]?.review}
          />
        ) : null}

        <button onClick={incrementTestimonial}>
          <FaChevronRight className="text-black" style={{ fontSize: "150%" }} />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
