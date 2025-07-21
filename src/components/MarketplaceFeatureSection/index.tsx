"use client";

import React from 'react';
import Image from 'next/image';
import { features } from './featureData';
import { SectionWrapper, FeatureList, ExploreButton } from './styles';

interface MarketplaceProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  featureItems?: string[];
}

const MarketplaceFeatureSection = ({
  title,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
  featureItems = features
}: MarketplaceProps) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-yellow-400">
          {title}
        </h2>

        {/* Layout Principal: 3 colunas em telas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-white mb-16">
          
          {/* Coluna da Esquerda: Primeiras 3 Features */}
          <div className="lg:text-right">
            <FeatureList>
              {featureItems.slice(0, 3).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </FeatureList>
          </div>

          {/* Coluna Central: Imagem */}
          <div className="flex justify-center order-first lg:order-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
            />
          </div>

          {/* Coluna da Direita: Últimas 3 Features */}
          <div>
            <FeatureList>
              {featureItems.slice(3, 6).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </FeatureList>
          </div>
        </div>

        {/* Botão Centralizado na Parte Inferior */}
        <div className="text-center">
            <ExploreButton href={buttonHref}>{buttonText}</ExploreButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MarketplaceFeatureSection;