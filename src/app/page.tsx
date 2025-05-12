import CTA from "@/components/home/CTA";
import Faq from "@/components/home/Faq";
import Framework from "@/components/home/Framework";
import Hero from "@/components/home/Hero";
import OurMission from "@/components/home/Mission";
import MeetMotaz from "@/components/home/Motaz";
import Pathologies from "@/components/home/Pathologies";
import SuccessStories from "@/components/home/SuccessStories";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <OurMission />
      <Pathologies />
      {/* <WhyUs /> */}
      <Framework />
      <SuccessStories />
      <MeetMotaz />
      <Testimonials />
      <Faq />
      <CTA />
    </main>
  );
}
