import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

// Define your primary color here
const primaryColor = '#9400d3';

const AboutSectionThree = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {/* Title */}
        <SectionTitle
          title="About Us"
          paragraph="Discover more about our legacy and the driving forces behind Moulis Advertising."
          mb="44px"
        />

        {/* Added Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 lg:px-0 mb-4 lg:mb-0">
            <h3 className="text-4xl font-bold mb-4" style={{ color: primaryColor }}>About Moulis</h3>
            <p className="mb-4 text-base lg:text-lg">
              Having a six decades legacy in communication solutions, Moulis Advertising, headquartered in Mumbai, boasts of a pan-India presence, and is a leading 360-degree advertising agency that offers result-oriented advertising services with clarity of focus on the objectives to be achieved for our clients. Our highly proficient professional experts provide solutions for marketing communications, brand promotion, and public relations.
            </p>
            <p className="text-base lg:text-lg">
              Our end-to-end services in the communication spectrum include digital marketing, content writing, social media management, website design and development, print media campaigns, TV & Radio Commercials, OOH, exhibition stall design, public relations, and event management.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end px-4 lg:px-0">
            <Image
              src="/images/logo/image.png"
              alt="Moulis Advertising Logo"
              width={300} // Adjust the width as needed
              height={100} // Adjust the height as needed
              className="img-fluid"
            />
          </div>
        </div>
        {/* End Added Content */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0">
            <Image
              src="/images/team/arvind-sir.png"
              alt="Arvind H Mittal"
              width={250} // Adjust the width as needed
              height={250} // Adjust the height as needed
              className="img-fluid rounded-full"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 lg:px-0">
            <h3 className="text-4xl font-bold mb-4" style={{ color: primaryColor }}>Arvind H Mittal</h3>
            <h4 className="text-2xl font-semibold mb-4" style={{ color: primaryColor }}>Managing Director & CEO</h4>
            <blockquote className="italic text-base lg:text-lg mb-4">
              "The ultimate objective of our advertising solutions is to provide clients the best returns on their investments by enhancing their brand visibility. Furthermore, the strategic plans accompanied by comprehensive research guide the creative solutions for our government and public sector clients to ensure persuasive and conclusive communication, bearing a perfect fit with their mandate. Simply put, with clarity of purpose, we help reach defined target audiences with the right message and frequency to make businesses profitable."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
