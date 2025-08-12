'use client';

import React from 'react';
import { Wrapper, PreTitle, MainTitle, Subtitle, StyledButton } from './styles';
import { InfoBlockProps } from './typo';

const InfoBlock: React.FC<InfoBlockProps> = ({ preTitle, mainTitle, subtitle, button }) => {
  return (
    <Wrapper>
      <PreTitle>{preTitle}</PreTitle>
      <MainTitle>{mainTitle}</MainTitle>
      <Subtitle>{subtitle}</Subtitle>
      {button && (
        <StyledButton href={button.href}>
          {button.text}
        </StyledButton>
      )}
    </Wrapper>
  );
};

export default InfoBlock;
