import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the About Page
export const metadata: Metadata = {
  title: "About Us ",
  description: "Learn more about our company, mission, and values. Discover what drives us and how we aim to make an impact.",
};

const AboutPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="About Us"
        description="Learn more about our company, our values, and our mission to serve our customers."
      />
      
      {/* Sections of the About Page */}
   
      <AboutSectionThree />
      {/* You can add more sections as needed */}
    </>
  );
};

export default AboutPage;
