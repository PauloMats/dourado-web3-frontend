"use client";

import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from './styles';
import HeroCard from './HeroCard';

// Tipagem para as props da seção inteira
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
}

const TechnologyHeroSection = ({ cardData, imageData }: TechnologyHeroProps) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: O Card com o conteúdo */}
          <div>
            <HeroCard 
              title={cardData.title}
              text={cardData.text}
              buttonText={cardData.buttonText}
              // Você pode adicionar uma função de clique aqui se necessário
              // onButtonClick={() => console.log('Botão clicado!')}
            />
          </div>

          {/* Coluna da Direita: A Imagem */}
          <div className="flex justify-center">
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