"use client";

import FaqBlock from "../reusable/FaqBlock";

function Faq() {
  return (
    <section className="relative w-full h-auto min-h-screen page-section overflow-hidden">
      <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold mb-5 md:mb-9 lg:mb-12 xl:mb-20">
        FAQ&apos;s
      </h1>
      <ul className="w-full overflow-hidden flex flex-col items-center gap-5 list-none">
        <FaqBlock
          isOpened={true}
          question="What makes HealthX360 different?"
          answer="HealthX360 is an educational initiative focused on chronic pain and long-term health complexity. We simplify multidimensional scientific research into accessible frameworks, covering physical, physiological, psychological, and spiritual contributors to chronic symptoms."
        />
        <FaqBlock
          question="Does HealthX360 offer medical advice or treatment?"
          answer="No. HealthX360 is not a medical provider. The platform shares educational content and science-based insights. Please consult a licensed healthcare professional for any health-related decisions."
        />
        <FaqBlock
          question="What happens in a discussion with HealthX360?"
          answer="Gain clarity through science-based frameworks that illuminate hidden connections in health, helping you see persistent challenges in a new light. These are purely educational conversations conducted in English, Spanish or Arabic"
        />
        {/* <FaqBlock
          question="What Guides HealthX360's Treatment Philosophy?"
          answer="Our philosophy is deeply rooted in addressing the root causes of health issues. We prioritize holistic healing and the empowerment of individuals to achieve lasting well-being. Unlike conventional healthcare, which often focuses on symptom management and profit-driven models, our approach is grounded in genuine care and personalized solutions"
        /> */}
        <FaqBlock
          question="Are discussions time-limited?"
          answer="No. We allow whatever time is needed for complete understanding, without rushing the process. Quality education can't be constrained by arbitrary time limits."
        />
        <FaqBlock
          question="Can this apply to any type of chronic pain?"
          answer="The HealthX360 framework is flexible and educational in nature. While it does not offer diagnosis or therapy, it explores common factors across many forms of persistent health patterns."
        />
      </ul>
    </section>
  );
}

export default Faq;
