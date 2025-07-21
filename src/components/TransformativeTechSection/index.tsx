"use client";

import React from 'react';
import Image from 'next/image';
import { SectionWrapper, LinkButton } from './styles';

interface TransformativeTechProps {
  title: string;
  text: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
}

const TransformativeTechSection = ({ title, text, linkText, linkHref, imageSrc, imageAlt }: TransformativeTechProps) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: Imagem */}
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1000}
              height={1000}
              quality={100}
            />
          </div>

          {/* Coluna da Direita: Conteúdo */}
          <div className="text-white">
            <h2 
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {text}
            </p>
            <LinkButton href={linkHref}>
              {linkText}
              <span>&rarr;</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TransformativeTechSection;