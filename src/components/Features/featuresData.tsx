import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-[#9400d3]">
        <path d="M37.7778 0H2.22222C0.997179 0 0 0.997179 0 2.22222V37.7778C0 39.0028 0.997179 40 2.22222 40H37.7778C39.0028 40 40 39.0028 40 37.7778V2.22222C40 0.997179 39.0028 0 37.7778 0ZM36 36H4V4H36V36Z" />
        <path d="M10 8H30V10H10V8ZM10 12H30V14H10V12ZM10 16H30V18H10V16ZM10 20H30V22H10V20ZM10 24H30V26H10V24ZM10 28H30V30H10V28Z" />
      </svg>
    ),
    title: "Print & Digital Media",
    paragraph:
      "Crafting compelling print media solutions, including brochures, posters, and flyers, while creating engaging digital content and strategies to enhance your online presence across social media, websites, and more.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-[#9400d3]">
        <path d="M36 0H4C1.791 0 0 1.791 0 4V36C0 38.209 1.791 40 4 40H36C38.209 40 40 38.209 40 36V4C40 1.791 38.209 0 36 0ZM36 36H4V4H36V36Z" />
        <path d="M12 10H28V12H12V10ZM12 14H28V16H12V14ZM12 18H28V20H12V18ZM12 22H28V24H12V22ZM12 26H28V28H12V26Z" />
      </svg>
    ),
    title: "TV Commercials & Documentaries",
    paragraph:
      "Producing high-quality TV commercials and documentaries to effectively communicate your brand message to a broad audience.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-[#9400d3]">
        <path d="M0 10V30H40V10H0ZM2 12H38V28H2V12Z" />
        <path d="M10 12V28H12V12H10ZM18 12V28H20V12H18ZM26 12V28H28V12H26Z" />
      </svg>
    ),
    title: "OOH",
    paragraph:
      "Designing impactful Out-Of-Home advertising solutions like billboards and transit ads to reach and engage your target audience.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-[#9400d3]">
        <path d="M10 0L0 10L10 20L20 10L10 0Z" />
        <path d="M10 20L0 30L10 40L20 30L10 20Z" />
        <path d="M20 0L30 10L20 20L10 10L20 0Z" />
        <path d="M20 20L30 30L20 40L10 30L20 20Z" />
      </svg>
    ),
    title: "Exhibitions",
    paragraph:
      "Organizing creative exhibitions to showcase your brand and products through engaging and immersive experiences.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-[#9400d3]">
        <path d="M20 5C15.0294 5 11 9.02944 11 14C11 18.9706 15.0294 23 20 23C24.9706 23 29 18.9706 29 14C29 9.02944 24.9706 5 20 5ZM20 20C16.134 20 13 16.866 13 13C13 9.13401 16.134 6 20 6C23.866 6 27 9.13401 27 13C27 16.866 23.866 20 20 20Z" />
        <path d="M20 30C17.7909 30 16.0003 31.7909 16.0003 34C16.0003 36.2091 17.7909 38 20 38C22.2091 38 24 36.2091 24 34C24 31.7909 22.2091 30 20 30ZM20 36C18.3431 36 17 34.6569 17 33C17 31.3431 18.3431 30 20 30C21.6569 30 23 31.3431 23 33C23 34.6569 21.6569 36 20 36Z" />
      </svg>
    ),
    title: "Music Shows / Cultural Events",
    paragraph:
      "Managing and organizing music shows and cultural events that resonate with audiences and leave a lasting impression.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current text-[#9400d3]">
        <path d="M20 4C10.9543 4 4 10.9543 4 20C4 29.0457 10.9543 36 20 36C29.0457 36 36 29.0457 36 20C36 10.9543 29.0457 4 20 4ZM20 32C14.4772 32 10 27.5228 10 22C10 16.4772 14.4772 12 20 12C25.5228 12 30 16.4772 30 22C30 27.5228 25.5228 32 20 32Z" />
        <path d="M20 10C15.0294 10 11 14.0294 11 19C11 23.9706 15.0294 28 20 28C24.9706 28 29 23.9706 29 19C29 14.0294 24.9706 10 20 10Z" />
      </svg>
    ),
    title: "Audio",
    paragraph:
      "Developing audio solutions including radio spots and podcasts to effectively convey your message through auditory channels.",
  },
];

export default featuresData;
