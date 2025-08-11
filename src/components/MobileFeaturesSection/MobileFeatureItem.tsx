'use client';

import React from 'react';
import Image from 'next/image';
import { DescriptionText } from './styles';

interface MobileFeatureItemProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  isTextAbove: boolean;
}

const MobileFeatureItem: React.FC<MobileFeatureItemProps> = ({ imageSrc, imageAlt, description, isTextAbove }) => {
  // Usa flex-col-reverse para colocar o texto em cima quando isTextAbove for true
  const containerClasses = `flex flex-col items-center gap-6 ${isTextAbove ? 'flex-col-reverse' : ''}`;

  return (
    <div className={containerClasses}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300} 
        height={600} 
        className="w-full max-w-[280px] h-auto shadow-2xl rounded-[2rem]"
      />
      <DescriptionText>{description}</DescriptionText>
    </div>
  );
};

export default MobileFeatureItem;
