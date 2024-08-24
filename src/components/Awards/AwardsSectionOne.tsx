import React from "react";

// Data for AwardsSectionOne
const awardsData = [
  {
    image: "/images/awards/prsi-2015-2nd.jpg", // Replace with your image path
    title: "PRSI National Award 2015",
    description: "2nd Prize - Coffee Table Book for Integral Coach Factory",
    year: "2015",
  },
  {
    image: "/images/awards/prsi-2016.jpg", // Replace with your image path
    title: "PRSI National Award 2016",
    description: "2nd Prize – Newsletter (Hindi) for United Insurance Co. Ltd.",
    year: "2016",
  },
  {
    image: "/images/awards/prsi-2022.png", // Replace with your image path
    title: "PRSI National Award 2022",
    description: "2nd Prize – Most Impressive Event Management for Maharashtra Govt.",
    year: "2022",
  },
  {
    image: "/images/awards/prsi-2022.jpg", // Replace with your image path
    title: "PRSI National Award 2022",
    description: "2nd Prize – Most Impressive Event Management for Maharashtra Govt.",
    year: "2022",
  },

];
const AwardsSectionOne = () => {
  return (
    <section id="awards" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white">Our Awards</h2>
          <p className="text-base font-medium text-body-color">
            We are honored to have received recognition for our work in the industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {awardsData.map((award, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-56 object-cover" // Increased height
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-body-color mb-4">{award.description}</p>
                  <span className="text-sm text-gray-500">{award.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSectionOne;
