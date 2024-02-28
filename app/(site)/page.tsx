import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Journey from "@/components/Features";
import Role from "@/components/Brands";
import Project from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Deepak SM",
  description: "This is Personal Website for Deepak",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Role />
      <Journey />
      {/* <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ /> */}
      <Project />
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
