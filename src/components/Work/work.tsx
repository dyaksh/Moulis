import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { FaPrint, FaDesktop, FaTv, FaGlobe, FaHeadphones } from 'react-icons/fa';

const workCategories = [
  {
    id: 1,
    title: "Print Media",
    description: "Explore our work in print media, including brochures, flyers, and more.",
    path: "/print",
    icon: <FaPrint className="w-8 h-8 text-[#9400d3]" />, // Updated color
  },
  {
    id: 2,
    title: "Digital Media",
    description: "See our digital media projects, from social media campaigns to websites.",
    path: "/digital",
    icon: <FaDesktop className="w-8 h-8 text-[#9400d3]" />, // Updated color
  },
  {
    id: 3,
    title: "TV Commercials & Documentaries",
    description: "Watch our TV commercials and documentaries that captivated audiences.",
    path: "/tv",
    icon: <FaTv className="w-8 h-8 text-[#9400d3]" />, // Updated color
  },
  {
    id: 4,
    title: "Exhibitions",
    description: "Discover our exhibition designs and installations that stood out.",
    path: "/exhibition",
    icon: <FaGlobe className="w-8 h-8 text-[#9400d3]" />, // Updated color
  },
  {
    id: 5,
    title: "Audio",
    description: "Listen to our audio productions, including podcasts and radio ads.",
    path: "/audio",
    icon: <FaHeadphones className="w-8 h-8 text-[#9400d3]" />, // Updated color
  },
];

const WorkPage = () => {
  return (
    <>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#9400d3]">Our Work</h1> {/* Updated color */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCategories.map((category) => (
            <Link
              key={category.id}
              href={category.path}
              className="block bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center text-[#9400d3]">
                  {category.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#9400d3] sm:text-2xl lg:text-xl xl:text-2xl">
                  {category.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkPage;
