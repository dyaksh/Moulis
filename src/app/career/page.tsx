import { Metadata } from 'next';
import Careers from '@/components/Careers'; // Adjust the import path as necessary
import Breadcrumb from '@/components/Common/Breadcrumb';

// Metadata for the Career Page
export const metadata: Metadata = {
  title: 'Career ',
  description: 'Join our team and explore career opportunities at Moulis Advertising.',
};

const CareerPage = () => {
  return (
    <>
      {/* Breadcrumb component to show page navigation */}
      <Breadcrumb
        pageName="Career"
        description="Explore career opportunities and join our team at Moulis Advertising."
      />

      {/* Career section */}
      <Careers />
    </>
  );
};

export default CareerPage;
