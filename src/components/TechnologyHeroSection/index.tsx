"use client";

import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from './styles';
import HeroCard from './HeroCard';

interface TechnologyHeroProps {
  cardData: {
    title: string;
    text: string;
    buttonText: string;
  };
  imageData: {
    src: string;
    alt: string;
  };
  imagePosition?: 'left' | 'right'; 
  withBackground?: boolean; 
}

const TechnologyHeroSection = ({ 
  cardData, 
  imageData,
  imagePosition = 'right',
  withBackground = false 
}: TechnologyHeroProps) => {
  return (
    <SectionWrapper $withBackground={withBackground}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className={imagePosition === 'left' ? 'md:order-last' : ''}>
            <HeroCard 
              title={cardData.title}
              text={cardData.text}
              buttonText={cardData.buttonText}
            />
          </div>

          <div className={`flex justify-center ${imagePosition === 'left' ? 'md:order-first' : ''}`}>
            <Image
              src={imageData.src}
              alt={imageData.alt}
              width={700}
              height={500}
              quality={100}
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechnologyHeroSection;