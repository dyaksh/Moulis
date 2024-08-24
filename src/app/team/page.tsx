import TeamSection from "@/components/Team/TeamSection";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the Team Page
export const metadata: Metadata = {
  title: "Meet Our Team ",
  description: "Meet the talented professionals who drive our company forward. Learn about their roles, experience, and contributions.",
  // other metadata can be added here
};

const TeamPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Our People"
        description="Meet the talented professionals who drive our company forward. Discover their roles, expertise, and contributions."
      />
      
      {/* Team Section */}
      <TeamSection />
      <br></br>
      
    </>
  );
};

export default TeamPage;
