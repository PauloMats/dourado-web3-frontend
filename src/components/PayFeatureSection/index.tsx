'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper, LayoutContainer, BottomText } from './styles';

// Tipagem para os dados que o componente espera
interface Card {
  src: string;
  alt: string;
}
interface PayFeatureData {
  backgroundCard: Card;
  foregroundCard: Card;
  topText: Card;
  bottomText: string;
}
interface PayFeatureSectionProps {
  data: PayFeatureData;
}

const PayFeatureSection: React.FC<PayFeatureSectionProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Usamos um container com position: relative para ancorar os elementos absolutos */}
        <LayoutContainer>
          
          {/* Texto/Logo superior direito */}
          <Image
            src={data.topText.src}
            alt={data.topText.alt}
            width={200}
            height={60}
            className="absolute top-0 right-0"
          />

          {/* Container para os cartões sobrepostos */}
          <div className="relative w-full max-w-lg h-auto">
            {/* Cartão de fundo */}
            <Image
              src={data.backgroundCard.src}
              alt={data.backgroundCard.alt}
              width={500}
              height={300}
              className="w-full h-auto"
            />
            {/* Cartão da frente, posicionado absolutamente */}
            <div className="absolute top-1/4 -left-1/4 w-full h-auto">
              <Image
                src={data.foregroundCard.src}
                alt={data.foregroundCard.alt}
                width={500}
                height={300}
                className="w-full h-auto shadow-2xl"
              />
            </div>
          </div>

          {/* Texto inferior esquerdo */}
          <BottomText dangerouslySetInnerHTML={{ __html: data.bottomText }} />

        </LayoutContainer>
      </div>
    </SectionWrapper>
  );
};

export default PayFeatureSection;
