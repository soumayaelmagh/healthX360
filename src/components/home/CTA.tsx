import { FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function CTA() {
  return (
    <section className="w-full h-screen sec-container page-section bg-secondary flex flex-col items-center justify-center text-center gap-6">
      <h3 className="text-2xl md:text-3xl xl:text-5xl font-semibold text-white">
      HealthX360 decodes the science behind persistent pain. <br />
      Explore evidence-based frameworks that reveal overlooked connections in health science—and discover new ways to understand complex patterns.
      </h3>
      <div className="flex items-center gap-2">
        <a
          href="https://healthx360.youcanbook.me/"
          className="flex items-center gap-2 cta-button md:text-lg  xl:text-2xl lg:pl-5 lg:pr-2 lg:py-1"
        >
          Book Now
          <GoArrowUpRight className="text-xl md:text-2xl xl:text-3xl p-[3px] bg-antiflash rounded-full text-secondary font-bold " />
        </a>
        <a
          target="_blank"
          href="https://wa.me/34601061452"
          className="p-[6px] md:p-2 bg-primary rounded-full transition-all duration-1000"
        >
          <FaWhatsapp className="text-xl md:text-3xl" />
        </a>
      </div>
    </section>
  );
}

export default CTA;
