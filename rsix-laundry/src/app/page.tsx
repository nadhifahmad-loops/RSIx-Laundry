import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
