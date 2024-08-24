import AwardsSectionOne from "@/components/Awards/AwardsSectionOne";
import AwardsSectionTwo from "@/components/Awards/AwardsSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the Awards Page
export const metadata: Metadata = {
  title: "Awards ",
  description: "Discover the awards and recognitions we've earned for our outstanding work in the advertising industry.",
};

const AwardsPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Awards"
        description="Explore the awards and accolades we've received for our contributions to the advertising industry."
      />
      
      {/* Sections of the Awards Page */}
      <AwardsSectionOne />
      <AwardsSectionTwo />
      {/* You can add more sections as needed */}
    </>
  );
};

export default AwardsPage;
