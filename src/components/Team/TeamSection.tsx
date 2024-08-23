import Image from "next/image";

// Define primary color here
const primaryColor = '#9400d3';

// Define team member data
// src/components/team/teamData.ts

export const teamMembers = [
  {
    image: "/images/team/arvind-sir.png",
    name: "Arvind H Mittal",
    position: "Managing Director & CEO",
    quote: "The ultimate objective of our advertising solutions is to provide clients the best returns on their investments by enhancing their brand visibility. Furthermore, the strategic plans accompanied by comprehensive research guide the creative solutions for our government and public sector clients to ensure persuasive and conclusive communication, bearing a perfect fit with their mandate. Simply put, with clarity of purpose, we help reach defined target audiences with the right message and frequency to make businesses profitable."
  },
  {
    image: "/images/team/shakeel-quazi.png",
    name: "Shakeel Quazi",
    position: "National Creative Director",
    text: "From ideation and conceptualisation to strategy formulation and creative execution, Shakeel captains the communication solutions for clients. 30+ years of relevant work experience gives him a good understanding of clients’ expectations. He has served clients that read like the who’s who of the Public Sector Enterprises and statutory bodies under the ownership of State and Central Governments, such as Indian Railways, Rail Wheel Factory, Bank of Baroda, Central Bank of India, MTNL and Water & Sanitation, among others. To provide creative teams with guidance and ideas to launch impressive creative projects have made him the key player for sustainable growth of many advertising agencies."
  },
  {
    image: "/images/team/swapnil-wadval.png",
    name: "Swapnil Wadval",
    position: "AVP, Mumbai",
    text: "Think Win-Win can be broadly defined as 'Having a frame of mind and heart that constantly seeks mutual benefit in all human interactions.' This has been my guiding principle at work, right from the time when I joined the advertising industry as a Client Servicing Executive. Having been in the industry for more than 13 years, I feel intention, knowledge and skills are the three ingredients that you need to achieve a Win-Win relationship with your clients and your team. Everything starts with intention. When the intentions are clear, relationships become more empathetic. Success is achieved through synergy. I am inspired by the words of Henry Ford, who once said: Coming together is a beginning, keeping together is progress and working together is success."
  },
  {
    image: "/images/team/arun-dwivedi.png",
    name: "Arun Dwivedi",
    position: "Regional Head, Delhi",
    text: "He believes, 'The art of creating raving fans of your clients is through your attitude. The attitude to empathise with the needs of your clients builds lasting relationships.' In a market where price and quality (read creativity) are no longer differentiators, it is only attitude that creates exceptional customer experience. The gleanings from his 32 years’ experience in client servicing, where he has had the privilege to serve some of the largest companies, like IndianOil, NTPC, KRIBHKO, IFFCO, to name a few, underscores the importance of attitude to build long-lasting customer relationships. His motto in life is: Attitude, not aptitude, determines altitude."
  },
  {
    image: "/images/team/sakshi-saxena.png",
    name: "Sakshi Saxena",
    position: "Branch Head, Lucknow",
    text: "Willingness to take initiative, build strong customer relationships and organizational skills, are three of her biggest strengths, which have helped her establish trust and rapport with the clients. She considers active listening as a valuable skill that has helped her over the past 8 years in the advertising industry. Focus on what clients say and take time to consider before responding. This quality has helped her earn respect and appreciation from the clients. She attributes her success to the belief: 'If you commit to something, make sure you complete the task. Besides meeting deadlines, deliver more than you promise.'"
  },
  {
    image: "/images/team/ganapathiraman.png",
    name: "B. Ganapathiraman",
    position: "Branch Head, Chennai",
    text: "He believes, 'Team management is more than just boosting the business’ bottom line. It’s to make every team member feel like an achiever which, in turn, has a powerful connection with business performance.' Creating a work culture of mutual trust is his key strength, which he has learnt over the past 10 years in the advertising industry. It is said, a happier team is a more productive team. Initiative and employee engagement are natural outcomes. Workplace pressures are better handled when the team is happy. It’s but natural, then, that he considers building mutual trust as a measure of his performance."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0">
              <Image
                src={member.image}
                alt={member.name}
                width={250} // Adjust the width as needed
                height={250} // Adjust the height as needed
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 lg:px-0">
              <h3 className="text-4xl font-bold mb-4" >
                {member.name}
              </h3>
              <h4 className="text-2xl font-semibold mb-4" style={{ color: primaryColor }}>
                {member.position}
              </h4>
              <blockquote className="italic text-base lg:text-lg mb-4">
                {member.quote || member.text}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
