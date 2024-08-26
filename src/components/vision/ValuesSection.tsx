// ValuesSection.tsx
import React from 'react';
import { FaPen, FaLaptopCode, FaCog, FaChartLine, FaBullhorn, FaHandshake } from 'react-icons/fa';

const PrimaryColor = '#9400d3'; // Primary color variable

const ValuesSection = () => {
  return (
    <section id="values" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 rounded-sm  px-8 py-11 shadow-md dark:bg-gray-800 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h3
                className="text-4xl font-bold mb-4 text-black dark:text-white"
                style={{ color: PrimaryColor }}
              >
                Our Values
              </h3>
              <p className="text-base lg:text-lg mb-4 text-gray-800 dark:text-gray-300">
                Moulis Defined! Moulis (plural for Mouli) means Lord Shiva. Is Shiva a form? Is Shiva somebody sitting in some place? No. Shiva is the entire Universe. Shiva is the essence from which everything is created, everything is sustained, and into which everything is dissolved. Shiva is the entire creation (Vishwaroopa) and yet he is formless or Nirakaar. Similarly, our advertising agency is a creative representation of Shiva, where our world of communication solutions comes to life; they are sustained and later relinquished to give birth to the new. Our five values are but a derivative of the threefold power of Shiva – symbolized by the Tripundra or Trident, namely, Ichha Shakti (Willpower), Jnana Shakti (Knowledge power), and Kriya Shakti (Power of Action).
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-full px-4 sm:w-1/2 mb-4">
                <div
                  className="flex items-center p-4      shadow-md dark:bg-gray-700"
                  style={{   borderStyle: 'solid', width: '240px', height: '160px' }}
                >
                  <div className="flex-shrink-0 text-2xl mr-4" style={{ color: PrimaryColor }}>
                    <FaPen />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-black dark:text-white">Creative Print Solutions</h4>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 mb-4">
                <div
                  className="flex items-center p-4      shadow-md dark:bg-gray-700"
                  style={{   borderStyle: 'solid', width: '240px', height: '160px' }}
                >
                  <div className="flex-shrink-0 text-2xl mr-4" style={{ color: PrimaryColor }}>
                    <FaLaptopCode />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-black dark:text-white">Engaging Digital Content</h4>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 mb-4">
                <div
                  className="flex items-center p-4      shadow-md dark:bg-gray-700"
                  style={{   borderStyle: 'solid', width: '240px', height: '160px' }}
                >
                  <div className="flex-shrink-0 text-2xl mr-4" style={{ color: PrimaryColor }}>
                    <FaBullhorn />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-black dark:text-white">High-Quality TV Commercials</h4>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 mb-4">
                <div
                  className="flex items-center p-4      shadow-md dark:bg-gray-700"
                  style={{   borderStyle: 'solid', width: '240px', height: '160px' }}
                >
                  <div className="flex-shrink-0 text-2xl mr-4" style={{ color: PrimaryColor }}>
                    <FaHandshake />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-black dark:text-white">Exceptional Customer Service</h4>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 mb-4">
                <div
                  className="flex items-center p-4      shadow-md dark:bg-gray-700"
                  style={{   borderStyle: 'solid', width: '240px', height: '160px' }}
                >
                  <div className="flex-shrink-0 text-2xl mr-4" style={{ color: PrimaryColor }}>
                    <FaCog />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-black dark:text-white">Innovative Solutions</h4>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2 mb-4">
                <div
                  className="flex items-center p-4      shadow-md dark:bg-gray-700"
                  style={{   borderStyle: 'solid', width: '240px', height: '160px' }}
                >
                  <div className="flex-shrink-0 text-2xl mr-4" style={{ color: PrimaryColor }}>
                    <FaChartLine />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-black dark:text-white">Strategic Growth</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
