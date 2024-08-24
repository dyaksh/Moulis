"use client";

import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";

const primaryColor = "#9400d3"; // New primary color

const Careers = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <section id="career" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            {/* Introduction Section */}
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-lg dark:bg-gray-800 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <div className="mb-6 flex items-center">
                <FaBriefcase className="w-8 h-8 text-[#9400d3] mr-2" />
                <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Join Our Team
                </h2>
              </div>
              <p className="mb-12 text-base font-medium text-gray-600 dark:text-gray-300">
                We&apos;re always looking for talented individuals. Fill out the form below and attach your resume.
              </p>
              
              {/* Application Form */}
              <form className="flex flex-col items-center">
                <div className="w-full max-w-md px-4">
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-gray-800 outline-none focus:border-primaryColorColor dark:border-transparent dark:bg-[#2C303B] dark:text-gray-300 dark:focus:border-primaryColor dark:focus:shadow-none"
                      style={{ borderColor: primaryColor, backgroundColor: "#f8f8f8", color: "#333" }}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-gray-800 outline-none focus:border-primaryColorColor dark:border-transparent dark:bg-[#2C303B] dark:text-gray-300 dark:focus:border-primaryColorColor dark:focus:shadow-none"
                      style={{ borderColor: primaryColor, backgroundColor: "#f8f8f8", color: "#333" }}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="phone" className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-gray-800 outline-none focus:border-primaryColor dark:border-transparent dark:bg-[#2C303B] dark:text-gray-300 dark:focus:border-primaryColor dark:focus:shadow-none"
                      style={{ borderColor: primaryColor, backgroundColor: "#f8f8f8", color: "#333" }}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="position" className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                      Position of Interest
                    </label>
                    <select
                      id="position"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-gray-800 outline-none focus:border-primaryColor dark:border-transparent dark:bg-[#2C303B] dark:text-gray-300 dark:focus:border-primaryColor dark:focus:shadow-none"
                      style={{ borderColor: primaryColor, backgroundColor: "#f8f8f8", color: "#333" }}
                    >
                      <option value="" disabled>Select a position</option>
                      <option value="client_servicing">Client Servicing</option>
                      <option value="art">Art</option>
                      <option value="hr">HR</option>
                      <option value="copy">Copy</option>
                      <option value="strategy">Strategy</option>
                      <option value="accounts">Accounts</option>
                    </select>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="resume" className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      id="resume"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-gray-800 outline-none focus:border-primaryColor dark:border-transparent dark:bg-[#2C303B] dark:text-gray-300 dark:focus:border-primaryColor dark:focus:shadow-none"
                      style={{ borderColor: primaryColor, backgroundColor: "#f8f8f8", color: "#333" }}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="mb-3 block text-sm font-medium text-gray-700 dark:text-white">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Enter your cover letter or message"
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-gray-800 outline-none focus:border-primaryColor dark:border-transparent dark:bg-[#2C303B] dark:text-gray-300 dark:focus:border-primaryColor dark:focus:shadow-none"
                      style={{ borderColor: primaryColor, backgroundColor: "#f8f8f8", color: "#333" }}
                    ></textarea>
                  </div>
                  
                  <div className="w-full">
                    <button
                      className="rounded-sm px-9 py-4 text-base font-medium text-white shadow-lg duration-300 hover:bg-[#7a00b0] dark:shadow-none"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
