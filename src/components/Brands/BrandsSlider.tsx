// src/components/Brands/BrandsSlider.tsx
import React from "react";
import Slider from "react-slick";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const BrandsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-16">
      <div className="container">
        <Slider {...settings}>
          {brandsData.map((brand: Brand) => (
            <div key={brand.id} className="px-4">
              <div className="flex items-center justify-center p-4">
                <a
                  href={brand.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="relative h-20 w-32 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
                >
                  <Image src={brand.imageLight} alt={brand.name} fill className="hidden dark:block" />
                  <Image src={brand.image} alt={brand.name} fill className="block dark:hidden" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandsSlider;
