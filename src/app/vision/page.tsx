import VisionSection from "@/components/vision/VisionSection";
import ValuesSection from "@/components/vision/ValuesSection";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the Vision and Values Page
export const metadata: Metadata = {
  title: "Vision & Values | Company Name",
  description: "Learn about our company's vision and core values that guide our mission and operations.",
  // other metadata can be added here
};

const VisionAndValuesPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Vision & Values"
        description="Discover our vision for the future and the core values that drive our company's mission."
      />
      
      {/* Sections of the Vision and Values Page */}
      <VisionSection />
      <ValuesSection />
      <br></br>
      
    </>
  );
};

export default VisionAndValuesPage;
