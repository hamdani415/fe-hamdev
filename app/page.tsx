import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import WhyChoose from "@/components/home/whyChoose";
import Templates from "@/components/home/templates";
import Pricing from "@/components/home/pricing";
import HowToOrder from "@/components/home/howToOrder";
import Portfolio from "@/components/home/portofolio";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="">
        <Hero />
        <WhyChoose/>
        <Templates/>
        <Pricing/>
        <HowToOrder/>
        {/* <Portfolio/> */}
        <FAQ/>
        <CTA/>
        <Footer/>
      </main>
    </div>
  );
}
