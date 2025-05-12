import Reveal from "../reusable/PrimaryTextReveal";

function WhyUs() {
  return (
    <section className="w-full h-auto min-h-screen page-section bg-antiflash relative" id="whyus">
      <h1 className="text-center text-3xl md:text-5xl xl:text-7xl mb-5 font-semibold">
        Why choose us ?
      </h1>
      <div className="absolute lg:relative lg:px-10 h-full w-1 lg:h-1 lg:w-full bg-black rounded-full flex items-center flex-col lg:flex-row justify-around">
        <div className="w-3 h-3 rounded-full bg-gray-500 border-2 border-antiflash flex flex-col gap-1 cursor-pointer transition-all xl:opacity-75 xl:hover:opacity-100 xl:hover:scale-110 ">
          <article className="translate-x-10 -translate-y-8 lg:-translate-x-24 lg:translate-y-20 w-[70vw] lg:w-48 lg:text-center ">
            <h1 className="text-xl xl:text-2xl font-semibold text-black">
              Our driving force
            </h1>
            <Reveal
              element={
                <p className="text-xs xl:text-sm leading-tight text-black-50">
                  A burning desire to challenge the conventions of healthcare.
                  Healthx360 seeks to restore agency to your health, sparking a
                  profound transformation in your life and in society
                </p>
              }
            />
          </article>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-500 border-2 border-antiflash flex flex-col gap-1 transition-all xl:opacity-75 xl:hover:opacity-100 xl:hover:scale-110 cursor-pointer">
          <article className="translate-x-10 -translate-y-8 lg:-translate-x-24 lg:translate-y-20 w-[70vw] lg:w-48 lg:text-center ">
            <h1 className="text-xl xl:text-2xl font-semibold text-black">
              Why we exist ?
            </h1>
            <Reveal
              element={
                <p className="text-xs xl:text-sm leading-tight text-black-50">
                  We don&apos;t settle for superficial fixes. Our holistic
                  approach delves deep, uncovering the root causes of your
                  health concerns
                </p>
              }
            />
          </article>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-500 border-2 border-antiflash flex flex-col gap-1 transition-all xl:opacity-75 xl:hover:opacity-100 xl:hover:scale-110 cursor-pointer">
          <article className="translate-x-10 -translate-y-8 lg:-translate-x-24 lg:translate-y-20 w-[70vw] lg:w-48 lg:text-center ">
            <h1 className="text-xl xl:text-2xl font-semibold text-black">
              A fresh perspective
            </h1>
            <Reveal
              element={
                <p className="text-xs xl:text-sm leading-tight text-black-50">
                  It&apos;s time to break free from the cycle of dependency on
                  traditional healthcare and equip yourself with the knowledge
                  and tools to take charge
                </p>
              }
            />
          </article>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-500 border-2 border-antiflash flex flex-col gap-1 transition-all xl:opacity-75 xl:hover:opacity-100 xl:hover:scale-110 cursor-pointer">
          <article className="translate-x-10 -translate-y-8 lg:-translate-x-24 lg:translate-y-20 w-[70vw]  lg:text-center lg:w-48 ">
            <h1 className="text-xl xl:text-2xl font-semibold text-black">
              Why us ?
            </h1>
            <Reveal
              element={
                <p className="text-xs xl:text-sm leading-tight text-black-50">
                  sparking a profound transformation in your life and in
                  society. Let&apos;s redefine the narrative of your health
                  journey together
                </p>
              }
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
