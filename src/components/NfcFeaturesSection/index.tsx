'use client';

import React from 'react';
import Image from 'next/image';
import { 
  SectionWrapper, 
  MainTitle, 
  FeatureTextWrapper,
  FeatureTitle,
  FeatureDescription
} from './styles';

interface Phone {
  imageSrc: string;
  imageAlt: string;
}
interface Feature {
  title: string;
  description: string;
}
interface NfcFeaturesData {
  title: string;
  leftPhones: Phone[];
  rightPhones: Phone[];
  centerFeatures: Feature[];
}
interface NfcFeaturesSectionProps {
  data: NfcFeaturesData;
}

const NfcFeaturesSection: React.FC<NfcFeaturesSectionProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MainTitle dangerouslySetInnerHTML={{ __html: data.title }} />

        {/* Layout principal de 3 colunas para desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Coluna da Esquerda: 2 Celulares */}
          <div className="flex flex-col items-center gap-8">
            {data.leftPhones.map((phone, index) => (
              <Image
                key={index}
                src={phone.imageSrc}
                alt={phone.imageAlt}
                width={300}
                height={600}
                className="w-full max-w-[280px] h-auto"
              />
            ))}
          </div>

          {/* Coluna Central: 3 Blocos de Texto */}
          <div className="flex flex-col justify-around h-full gap-16 py-16 order-first lg:order-none">
            {data.centerFeatures.map((feature, index) => (
              <FeatureTextWrapper key={index}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription dangerouslySetInnerHTML={{ __html: feature.description }} />
              </FeatureTextWrapper>
            ))}
          </div>

          {/* Coluna da Direita: 2 Celulares */}
          <div className="flex flex-col items-center gap-8">
            {data.rightPhones.map((phone, index) => (
              <Image
                key={index}
                src={phone.imageSrc}
                alt={phone.imageAlt}
                width={300}
                height={600}
                className="w-full max-w-[280px] h-auto"
              />
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default NfcFeaturesSection;
