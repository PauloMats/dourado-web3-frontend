'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper, CarouselWrapper, CarouselTrack, LogoItem } from './styles';

interface Logo {
  src: string;
  alt: string;
}
interface ScrollingLogosProps {
  topRow: Logo[];
  bottomRow: Logo[];
}

const ScrollingLogosSection: React.FC<ScrollingLogosProps> = ({ topRow, bottomRow }) => {
  const extendedTopRow = [...topRow, ...topRow];
  const extendedBottomRow = [...bottomRow, ...bottomRow];

  return (
    <SectionWrapper>
      {/* Carrossel de cima (direita para esquerda) */}
      <CarouselWrapper>
        <CarouselTrack direction="left">
          {extendedTopRow.map((logo, index) => (
            <LogoItem key={index}>
              <Image src={logo.src} alt={logo.alt} width={400} height={150} />
            </LogoItem>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      {/* Carrossel de baixo (esquerda para direita) */}
      <CarouselWrapper>
        <CarouselTrack direction="right">
          {extendedBottomRow.map((logo, index) => (
            <LogoItem key={index}>
              <Image src={logo.src} alt={logo.alt} width={400} height={150} />
            </LogoItem>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </SectionWrapper>
  );
};

export default ScrollingLogosSection;
