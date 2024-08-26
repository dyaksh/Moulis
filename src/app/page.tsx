// src/app/home/page.tsx or src/app/home/index.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Clients   from "@/components/Clients/";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video"; // Assuming Video is used somewhere, if not, you can remove it
import { Metadata } from "next";
import LogoSlider from "@/components/Clients/LogoSlider";
import dynamic from "next/dynamic"; // Only if you need dynamic imports

export const metadata: Metadata = {
  title: "Moulis Advertising",
  description: "Advertising",
  // other metadata can be added here
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Clients />
      <LogoSlider />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
      {/* Include <Video /> if needed */}
    </>
  );
}
