'use client';

import React from 'react';
import { SectionWrapper, FinalTitle } from './styles';
import FeatureGridItem from './FeatureGridItem';

// Tipagem para os dados que o componente espera
interface Feature {
  imageSrc: string;
  imageAlt: string;
  descriptionPoints: string[];
}
interface PosFeaturesData {
  finalTitle: string;
  features: Feature[];
}
interface PosFeaturesSectionProps {
  data: PosFeaturesData;
}

const PosFeaturesSection: React.FC<PosFeaturesSectionProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid 2x2 para as features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {data.features.map((feature, index) => (
            <FeatureGridItem
              key={index}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              descriptionPoints={feature.descriptionPoints}
            />
          ))}
        </div>

        {/* Título Final */}
        <FinalTitle dangerouslySetInnerHTML={{ __html: data.finalTitle }} />
      </div>
    </SectionWrapper>
  );
};

export default PosFeaturesSection;
