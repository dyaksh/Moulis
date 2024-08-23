import Brands from "@/components/Brands/";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the Client Page
export const metadata: Metadata = {
  title: "Clients | Moulis Advertising",
  description: "Explore our valued clients and partners. Learn more about who we work with and the relationships we cherish.",
  // other metadata can be added here
};

const ClientPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Clients"
        description="Explore our valued clients and partners. Learn more about who we work with and the relationships we cherish."
      />
      
      {/* Sections of the Client Page */}
    <Brands /><br></br>
    
      
      {/* Add any other sections or components if needed */}
    </>
  );
};

export default ClientPage;
