import Counter from "../reusable/Counter";
import Reveal from "../reusable/PrimaryTextReveal";
import ProgressBar from "../reusable/Progress";

function OurMission() {
  return (
    <section className="page-section w-full h-auto min-h-screen text-center overflow-x-hidden" id="mission">
      <div className="relative w-full flex gap-10 px-5 spinning-text mb-16 text-black">
        <h1 className="relative  whitespace-nowrap w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium ">
        Bringing order /{" "}
          <span className="spinning-text-gradient">Decoding Complexity</span>
        </h1>
        <h1 className="relative whitespace-nowrap w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">
          Bringing order /{" "}
          <span className="spinning-text-gradient">Reducing Suffering</span>
        </h1>
        <h1 className="relative hidden xl:flex whitespace-nowrap w-auto xl:text-7xl font-medium">
          Bringing order /{" "}
          <span className="spinning-text-gradient">Reducing Suffering</span>
        </h1>
      </div>
      <Reveal
        element={
          <p className="font-medium text-lg md:text-xl lg:text-2xl xl:text-4xl text-black md:text-start xl:mt-20"> Our mission is to explain the overlooked root causes behind persistent pain through science-based education. HealthX360 brings order to chaos by simplifying complex concepts into a holistic understanding of physiology, psychology, and spiritual well-being
       </p>
        }
        width="fit-content"
      />
      <div className="w-full h-auto mt-10 md:mt-20 flex justify-center md:justify-end items-end gap-8">
        <Counter label="Years of research" value={10} />
        <ProgressBar label="96% Transformed perspectives" value={96} />
      </div>
    </section>
  );
}

export default OurMission;
