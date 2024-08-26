// src/app/client/index.tsx
import Clients from "@/components/Clients/";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

// Metadata for the Client Page
export const metadata: Metadata = {
  title: "Clients | Moulis Advertising",
  description: "Explore our valued clients and partners. Learn more about who we work with and the relationships we cherish.",
};

const ClientPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Clients"
        description="Explore our valued clients and partners. Learn more about who we work with and the relationships we cherish."
      />
      
      {/* Clients section */}
      <Clients />
    </>
  );
};

export default ClientPage;
