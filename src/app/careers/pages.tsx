import Careers from "@/components/Careers"; // Import the Career component
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the Career Page
export const metadata: Metadata = {
  title: "Careers | MOULIS:Advertising",
  description: "Explore career opportunities at MOULIS:Advertising. Join our team and help us make an impact in the advertising industry.",
};

const CareerPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Careers"
        description="Explore career opportunities at MOULIS:Advertising. Join our team and help us make an impact."
      />
      
      {/* Career component rendering */}
      <Careers />
      {/* You can add more sections as needed */}
    </>
  );
};

export default CareerPage;
