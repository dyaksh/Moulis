import Image from "next/image";
import { FaRegLightbulb, FaUserAlt, FaPaintBrush, FaStar, FaCheckCircle } from 'react-icons/fa';

// Define your primary color here
const primaryColor = '#9400d3';

const ValuesSection = () => {
  return (
    <section id="values" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        {/* Values Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 lg:px-0 mb-4 lg:mb-0">
            <h3 className="text-4xl font-bold mb-4" style={{ color: primaryColor }}>Our Values</h3>
            <p className="text-base lg:text-lg mb-4">
              Moulis Defined! Moulis (plural for Mouli) means Lord Shiva. Is Shiva a form? Is Shiva somebody sitting in some place? No. Shiva is the entire Universe. Shiva is the essence from which everything is created, everything is sustained, and into which everything is dissolved. Shiva is the entire creation (Vishwaroopa) and yet he is formless or Nirakaar. Similarly, our advertising agency is a creative representation of Shiva, where our world of communication solutions comes to life; they are sustained and later relinquished to give birth to the new. Our five values are but a derivative of the threefold power of Shiva – symbolized by the Tripundra or Trident, namely, Ichha Shakti (Willpower), Jnana Shakti (Knowledge power), and Kriya Shakti (Power of Action).
            </p>
            <ul className="list-none text-base lg:text-lg">
              <li className="flex items-center mb-4">
                <FaRegLightbulb className="text-2xl mr-3" style={{ color: primaryColor }} />
                <span>Clarity</span>
              </li>
              <li className="flex items-center mb-4">
                <FaUserAlt className="text-2xl mr-3" style={{ color: primaryColor }} />
                <span>Individuality</span>
              </li>
              <li className="flex items-center mb-4">
                <FaPaintBrush className="text-2xl mr-3" style={{ color: primaryColor }} />
                <span>Creativity</span>
              </li>
              <li className="flex items-center mb-4">
                <FaStar className="text-2xl mr-3" style={{ color: primaryColor }} />
                <span>Quality</span>
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-2xl mr-3" style={{ color: primaryColor }} />
                <span>Accountability</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <Image
              src="/images/vision/values.svg" // Update with your image path
              alt="Values Image"
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

export default ValuesSection;
