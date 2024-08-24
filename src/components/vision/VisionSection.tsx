import Image from "next/image";

// Define your primary color here
const primaryColor = '#9400d3';

const VisionSection = () => {
  return (
    <section id="vision" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 lg:px-0 mb-4 lg:mb-0">
            <h3 className="text-4xl font-bold mb-4" style={{ color: primaryColor }}>Our Vision</h3>
            <p className="text-base lg:text-lg">
              Through constant research and application of innovative solutions, we will do all it takes to be India's premier full-service advertising agency that delivers results for our clients. At the heart of everything we do is a set of shared values that serve as the basis for the decisions we make and the actions we take to create impact for our clients. The espoused values that drive our success include Clarity, Individuality, Creativity, Quality, and Accountability.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <Image
              src="/images/vision/vision.svg" // Update with your image path
              alt="Vision Image"
              width={300}
              height={200}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
