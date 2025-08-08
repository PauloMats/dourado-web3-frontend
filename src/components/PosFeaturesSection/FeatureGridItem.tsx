'use client';

import React from 'react';
import Image from 'next/image';
import { FeatureList } from './styles';

interface FeatureGridItemProps {
  imageSrc: string;
  imageAlt: string;
  descriptionPoints: string[];
}

const FeatureGridItem: React.FC<FeatureGridItemProps> = ({ imageSrc, imageAlt, descriptionPoints }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={800}
        height={600}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <FeatureList>
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </FeatureList>
    </div>
  );
};

export default FeatureGridItem;
