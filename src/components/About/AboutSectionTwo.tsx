import Image from "next/image";

// Define your primary color here
const primaryColor = '#9400d3';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
              style={{ position: 'relative', height: 'auto' }} // Ensure the parent element has a defined height
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="Moulis Advertising"
                fill
                style={{ objectFit: 'cover' }} // Ensure proper scaling
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Moulis Advertising"
                fill
                style={{ objectFit: 'cover' }} // Ensure proper scaling
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold" style={{ color: primaryColor }}>
                  Innovative Campaigns
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Moulis Advertising, we craft innovative and impactful media campaigns that resonate with audiences. Our approach ensures that every campaign is tailored to maximize engagement and drive results.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold" style={{ color: primaryColor }}>
                  Comprehensive Media Strategies
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We offer comprehensive media strategies that integrate Print Media, Digital Media, TV Commercials, OOH Advertising, Exhibitions, Music Shows, Cultural Events, and Audio solutions to ensure your brand&apos;s message is effectively communicated across all channels.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold" style={{ color: primaryColor }}>
                  Client-Centric Approach
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our client-centric approach prioritizes your needs and goals, ensuring that every project is executed with precision and excellence. We are committed to delivering outstanding support and service throughout your advertising journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
