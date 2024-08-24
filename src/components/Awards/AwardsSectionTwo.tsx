import React from "react";

// Data for AwardsSectionTwo
const recognitionsData = [
  {
    image: "/images/awards/prsi-2021.png", // Replace with your image path
    title: "Public Relations Society of India PRSI National Awards-2021",
    description: "MD of Moulis Advertising receiving the Award at PRSI Conference, Chennai. Moulis has been fortunate to be recognized consistently for its creativity, by clients and by industry forums. Some of the work that has won awards at the national level include design of Coffee Table Book, Wall Calendar and Brochures.",
    year: "2021",
  },
  {
    image: "/images/awards/prsi-2015-1st.png", // Replace with your image path
    title: "PRSI National Award ",
    description: "Team Moulis of Moulis Advertising receiving the First Prize at PRSI Conference, Ahmedabad",
    year: "2015",
  },

];
const AwardsSectionTwo = () => {
  return (
    <section id="recognitions" className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white">Special Recognitions</h2>
          <p className="text-base font-medium text-body-color">
            Here are some special recognitions that have highlighted our journey.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {recognitionsData.map((recognition, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={recognition.image}
                  alt={recognition.title}
                  className="w-full h-56 object-cover" // Increased height
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{recognition.title}</h3>
                  <p className="text-sm text-body-color mb-4">{recognition.description}</p>
                  <span className="text-sm text-gray-500">{recognition.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSectionTwo;