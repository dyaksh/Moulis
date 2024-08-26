import { FaBullhorn, FaProjectDiagram, FaHandsHelping } from "react-icons/fa";

// Define your primary color here
const primaryColor = '#9400d3';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-start rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 text-center">
            <div className="text-6xl mb-4" style={{ color: primaryColor }}>
              <FaBullhorn />
            </div>
            <h3 className="mb-3 text-xl font-bold" style={{ color: primaryColor }}>
              Innovative Campaigns
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              At Moulis Advertising, we craft innovative and impactful media campaigns that resonate with audiences. Our approach ensures that every campaign is tailored to maximize engagement and drive results.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 text-center">
            <div className="text-6xl mb-4" style={{ color: primaryColor }}>
              <FaProjectDiagram />
            </div>
            <h3 className="mb-3 text-xl font-bold" style={{ color: primaryColor }}>
              Comprehensive Media Strategies
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              We offer comprehensive media strategies that integrate Print Media, Digital Media, TV Commercials, OOH Advertising, Exhibitions, Music Shows, Cultural Events, and Audio solutions to ensure your brand's message is effectively communicated across all channels.
            </p>
          </div>

          <div className="flex flex-col items-center justify-start rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 text-center">
            <div className="text-6xl mb-4" style={{ color: primaryColor }}>
              <FaHandsHelping />
            </div>
            <h3 className="mb-3 text-xl font-bold" style={{ color: primaryColor }}>
              Client-Centric Approach
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Our client-centric approach prioritizes your needs and goals, ensuring that every project is executed with precision and excellence. We are committed to delivering outstanding support and service throughout your advertising journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
