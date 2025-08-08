"use client";
import { CarouselWrapper, CarouselTrack, LogoItem } from "./styles";
import Image from "next/image";

const logos = [
  "/img/icon-product1.png",
  "/img/icon-product2.png",
  "/img/icon-product3.png",
  "/img/icon-product4.png",
  "/img/icon-product5.png",
  "/img/icon-product6.png",
  "/img/icon-product7.png",
  "/img/icon-product1.png",
  "/img/icon-product2.png",
  "/img/icon-product3.png",
];

const SimpleCarousel = () => {
  return (
    <CarouselWrapper>
      <CarouselTrack>
        {[...logos, ...logos].map((logo, index) => (
          <LogoItem key={index}>
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={120} 
              height={40}  
              objectFit="contain"
            />
          </LogoItem>
        ))}
      </CarouselTrack>
    </CarouselWrapper>
  );
};

export default SimpleCarousel;
