import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BentoFeatures } from "@/components/sections/bento-features";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { LabView } from "@/components/sections/lab-view";
import { Transition } from "@/components/sections/transition";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BentoFeatures />
      <TechMarquee />
      <LabView />
      <Transition />
      <Testimonials />
      <Footer />
    </div>
  );
}
