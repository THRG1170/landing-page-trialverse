import Features from "@/components/features";
import Hero from "@/components/hero";
import Founders from "@/components/founders";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Founders />
      <Testimonials />
      <Faq />
    </div>
  );
}
