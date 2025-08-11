'use client';

import React from 'react';
import { SectionWrapper, MainTitle } from './styles';
import MobileFeatureItem from './MobileFeatureItem';

interface Feature {
  imageSrc: string;
  imageAlt: string;
  description: string;
}
interface MobileFeaturesData {
  title: string;
  features: Feature[];
}
interface MobileFeaturesSectionProps {
  data: MobileFeaturesData;
}

const MobileFeaturesSection: React.FC<MobileFeaturesSectionProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MainTitle>{data.title}</MainTitle>

        {/* Grid para os celulares. 'items-end' alinha todos na base por padrão */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
          {data.features.map((feature, index) => {
            // Lógica para alternar a posição e efeito de "subir"
            const isTextAbove = index % 2 !== 0;
            const isRaised = index % 2 === 0;

            return (
              <div
                key={index}
                className={`transition-transform duration-500 ${isRaised ? 'lg:-translate-y-16' : ''}`}
              >
                <MobileFeatureItem
                  imageSrc={feature.imageSrc}
                  imageAlt={feature.imageAlt}
                  description={feature.description}
                  isTextAbove={isTextAbove}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MobileFeaturesSection;
