import Breadcrumb from "@/components/Common/Breadcrumb";
import WorkPage from "@/components/Work/work";
import { Metadata } from "next";

// Metadata for the Work Page
export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore our diverse range of work across print media, digital media, TV commercials, exhibitions, and audio projects.",
};

const Work = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Our Work"
        description="Explore the diverse range of work we have completed across various mediums."
      />
      
      {/* WorkPage component to show the list of work categories */}
      <WorkPage />
      
      <br></br>
    </>
  );
};

export default Work;
