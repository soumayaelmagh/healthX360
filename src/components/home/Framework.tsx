import img27 from "@/assets/images/27.svg";
import img38 from "@/assets/images/38.svg";
import img39 from "@/assets/images/39.svg";
import Image from "next/image";

function Framework() {
  return (
    <section className="w-full h-screen page-section gap-5">
      <h1 className="text-center text-2xl md:text-5xl xl:text-7xl font-semibold mb-5 xl:mb-20">
      Peer-Reviewed Frameworks
      </h1>
      <ul className="list-none w-full flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 justify-between">
        <li className="framework-item">
          <a
            className="w-full h-full"
            target="_blank"
            href="https://drive.google.com/file/d/1NTs0hmAvehLA2daeN6LGkIMvGpQeriSd/view?usp=sharing"
          >
            <Image
              width={30}
              height={28}
              alt="DNA symbol"
              src={img27}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-base lg:text-2xl xl:text-3xl text-antiflash">
            Holistic System Interactions
            </h1>
          </a>
        </li>
        <li className="framework-item">
          <a
            className="w-full h-full"
            target="_blank"
            href="https://drive.google.com/file/d/11oc5aOzrqfWitgVxV54CsEvweu-ykFot/view?usp=sharing"
          >
            <Image
              width={30}
              height={28}
              alt="DNA symbol"
              src={img27}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-base lg:text-2xl xl:text-3xl text-antiflash">
            Integrated Pain Research
            </h1>
          </a>
        </li>
        <li className="framework-item">
          <a
            className="w-full h-full"
            target="_blank"
            href="https://drive.google.com/file/d/1aORxrDR4BxadXA7VuMXbUmYjJAdr7miV/view?usp=sharing"
          >
            <Image
              width={27}
              height={26}
              alt="DNA symbol"
              src={img27}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-base lg:text-2xl xl:text-3xl text-antiflash">
            Multimodal <br /> Health  
            Dynamics
            </h1>
          </a>
        </li>
      </ul>
      <div className="text-center  pt-24">
      <h3 className="text-primary font-semibold text-lg sm:text-2xl md:text-lg xl:text-2xl">
          Disclaimer 
          </h3>
       <p className="hidden md:flex text-center text-s lg:text-l text-black w-3/3 mb-5 lg:mb-8">&ldquo;HealthX360 is a European-based educational platform founded by a Spanish health professional with expertise in chronic pain and complex cases. Due to international regulations and varying medical licensing requirements, HealthX360 does not provide medical advice, diagnosis, or treatment. All information shared is for educational purposes only. Please consult a licensed healthcare provider in your country before making any health-related decisions &rdquo;
        </p>
        </div>
    </section>
  );
}

export default Framework;
