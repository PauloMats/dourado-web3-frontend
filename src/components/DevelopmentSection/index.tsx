'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper, ImageGrid } from './styles';
import InfoBlock from '@/components/InfoBlock';
import { InfoBlockProps } from '@/components/InfoBlock/typo';

interface ImageItem {
  src: string;
  alt: string;
}

interface DevelopmentSectionProps {
  infoBlockData: InfoBlockProps;
  images: ImageItem[];
}

const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({ infoBlockData, images }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Esquerda: Grid de Imagens */}
        <ImageGrid>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={index === 0 ? 600 : 290} // Tamanhos diferentes para a primeira imagem
                height={index === 0 ? 300 : 200}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </ImageGrid>

        {/* Coluna da Direita: Bloco de Informações */}
        <div className="lg:order-last order-first">
          <InfoBlock {...infoBlockData} />
        </div>

      </div>
    </SectionWrapper>
  );
};

export default DevelopmentSection;
