"use client";

import React from 'react';
import Image from 'next/image';
import { SectionWrapper, TitleImageWrapper, StatValue, StatTitle, StatDescription } from './styles';

interface Stat {
  value: string;
  title: string;
  description: string;
}
interface HeroData {
  titleImage: { src: string; alt: string; };
  overlayImage: { src: string; alt: string; };
  stats: Stat[];
}

interface MercadoHeroProps {
  data: HeroData;
}

const MercadoHeroSection = ({ data }: MercadoHeroProps) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: Título como Imagem + Overlay */}
          <TitleImageWrapper>
            <Image
              src={data.titleImage.src}
              alt={data.titleImage.alt}
              width={450}
              height={250}
              quality={100}
            />
            {/* Imagem de overlay posicionada de forma absoluta */}
            <Image
              src={data.overlayImage.src}
              alt={data.overlayImage.alt}
              width={100}
              height={100}
              className="absolute -bottom-8 left-1/4 transform -translate-x-1/2"
            />
          </TitleImageWrapper>

          {/* Coluna da Direita: Estatísticas */}
          <div className="flex flex-col gap-10">
            {data.stats.map((stat, index) => (
              <div key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatTitle>{stat.title}</StatTitle>
                {stat.description && (
                  <StatDescription>{stat.description}</StatDescription>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default MercadoHeroSection;