import Image from "next/image";
import framework from "@/assets/images/framework.svg";

function SuccessStories() {
  return (
    <section className="w-full h-auto min-h-screen relative page-section sec-container flex flex-col items-center gap-5 md:gap-10 text-center">
      <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold">
      Frameworks in Action
      </h1>
      <ul className="w-full h-[60vh] md:h-auto relative  px-4 lg:px-8 text-start flex md:flex-wrap lg:flex-nowrap items-center md:justify-center gap-2 lg:gap-4 overflow-x-auto md:overflow-x-hidden">
        <li className="w-[80vw] sm:w-[60vw] md:w-[45%] h-[90%] md:h-3/4 lg:h-[50vh] xl:max-h-[400px] xl:max-w-[300px] bg-antiflash shadow-lg rounded-lg relative flex flex-col items-center text-center gap-3 flex-shrink-0 md:flex-shrink border-2 border-opacity-15 border-black px-3 py-5 ">
          <h3 className="text-primary font-semibold text-lg sm:text-2xl md:text-lg xl:text-2xl">
           Foundational Patterns
          </h3>
          <p className="text-xs sm:text-sm md:text-xs xl:text-sm text-black text-opacity-75">
          Many people with common conditions like persistent fatigue and joint pain never hear how circadian biology, metabolic science, and movement mechanics interconnect. A single discussion illuminating these research connections—presented purely as education—often becomes their first coherent explanation for symptoms. Some report this knowledge alone helped them communicate more effectively with healthcare providers.
          </p>
        </li>
        <li className="w-[80vw] sm:w-[60vw] md:w-[45%] h-[90%] md:h-3/4 lg:h-[50vh] xl:max-h-[400px] xl:max-w-[300px] bg-antiflash shadow-lg rounded-lg relative flex flex-col items-center text-center gap-3 flex-shrink-0 md:flex-shrink border-2 border-opacity-15 border-black px-3 py-5 ">
          <h3 className="text-primary font-semibold text-lg sm:text-2xl md:text-lg xl:text-2xl">
          Physiological Connections
          </h3>
          <p className="text-xs sm:text-sm md:text-xs xl:text-sm text-black text-opacity-75">
          Countless individuals diagnosed with depression or chronic pain later discover overlooked physiological factors in research. Simply understanding the science of nutrient-neurology links—without any HealthX360 assessment—has led many to ask their doctors new questions. This often reveals root causes masked as psychiatric conditions, though professional medical guidance remains essential
          </p>
        </li>
        <li className="w-[80vw] sm:w-[60vw] md:w-[45%] h-[90%] md:h-3/4 lg:h-[50vh] xl:max-h-[400px] xl:max-w-[300px] bg-antiflash shadow-lg rounded-lg relative flex flex-col items-center text-center gap-3 flex-shrink-0 md:flex-shrink border-2 border-opacity-15 border-black px-3 py-5 ">
          <h3 className="text-primary font-semibold text-lg sm:text-2xl md:text-lg xl:text-2xl">
          Psychological Stressors
          </h3>
          <p className="text-xs sm:text-sm md:text-xs xl:text-sm text-black text-opacity-75">
          People with ‘perfect’ health habits often miss how stress biology manifests physically. When discussions reveal peer-reviewed trauma physiology and pain research—especially the mind-body mechanisms science confirms—many recognize unconscious psychological patterns influencing their symptoms for the first time.
          </p>
        </li>
        <li className="w-[80vw] sm:w-[60vw] md:w-[45%] h-[90%] md:h-3/4 lg:h-[50vh] xl:max-h-[400px] xl:max-w-[300px] bg-antiflash shadow-lg rounded-lg relative flex flex-col items-center text-center gap-3 flex-shrink-0 md:flex-shrink border-2 border-opacity-15 border-black px-3 py-5 ">
          <h3 className="text-primary font-semibold text-lg sm:text-2xl md:text-lg xl:text-2xl">
          Existential Alignment
          </h3>
          <p className="text-xs sm:text-sm md:text-xs xl:text-sm text-black text-opacity-75">
          Even those with flawless physiological and psychological regimes sometimes encounter persistent pain. Introducing them to rigorous studies on belief-pain neurobiology and existential health science frequently provides missing context—helping reframe their approach within their existing medical care.
          </p>
        </li>
      </ul>
      <h3 className="text-primary font-semibold text-lg sm:text-2xl md:text-lg xl:text-2xl">
          Disclaimer 
          </h3>
       <p className="hidden md:flex text-start text-xs lg:text-sm text-black w-2/3 mb-5 lg:mb-8">" We are committed to identifying and addressing the root causes behind
          every symptom, We strive to provide not only relief but also knowledge
          and preventive strategies for you to manage and improve your health "
        </p>
      <Image
        width={50}
        height={50}
        alt="framework"
        src={framework}
        className="w-full lg:w-2/3 h-auto"
      ></Image>
    </section>
  );
}

export default SuccessStories;
