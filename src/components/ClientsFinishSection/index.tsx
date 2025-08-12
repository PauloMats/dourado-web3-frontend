'use client';

import React from 'react';
import { SectionWrapper, MainTitle, Subtitle, RegisterButton } from './styles';

interface ClientsHeroProps {
  data: {
    title: string;
    subtitle: string;
    button: {
      text: string;
      href: string;
    };
  };
}

const ClientsHeroSection: React.FC<ClientsHeroProps> = ({ data }) => {
  return (
    <SectionWrapper>
      <MainTitle dangerouslySetInnerHTML={{ __html: data.title }} />
      <Subtitle>{data.subtitle}</Subtitle>
      <RegisterButton href={data.button.href}>
        {data.button.text}
      </RegisterButton>
    </SectionWrapper>
  );
};

export default ClientsHeroSection;
