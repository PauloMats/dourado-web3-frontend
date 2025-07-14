"use client";

import { CarouselWrapper, CarouselTrack } from "./styles";
import Image from "next/image";

const logos = [
  "/img/logo1.png",
  "/img/logo2.png",
  "/img/logo3.png",
  "/img/logo4.png",
  "/img/logo5.png",
];

const SimpleCarousel = () => {
  return (
    <CarouselWrapper>
      <CarouselTrack>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-6">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={120}
              height={40}
              objectFit="contain"
            />
          </div>
        ))}
      </CarouselTrack>\
    </CarouselWrapper>
  );
};

export default SimpleCarousel;
