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
              height={30}
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
              height={30}
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
              width={30}
              height={30}
              alt="DNA symbol"
              src={img27}
              className="framework-symbols"
            ></Image>
            <h1 className="font-semibold text-base lg:text-2xl xl:text-3xl text-antiflash">
            Multimodal Health Dynamics
            </h1>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Framework;
