'use client';

import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';
import InfoBlock from '@/components/InfoBlock';
import ContactForm from '@/components/ContactForm';
import { InfoBlockProps } from '@/components/InfoBlock/typo';

const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm9}; 
  padding: ${pxToRem(100)} 0;
`;

const MainTitle = styled.h2`
  text-align: center;
  color: ${colors.primary.bdm4};
  font-size: ${pxToRem(40)};
  font-weight: bold;
  margin-bottom: ${pxToRem(80)};
`;

interface ContactSectionProps {
  title: string;
  infoBlockData: InfoBlockProps;
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, infoBlockData }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <MainTitle>{title}</MainTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <InfoBlock {...infoBlockData} />
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
