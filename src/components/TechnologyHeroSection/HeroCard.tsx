"use client";

import React from 'react';
import { CardContainer, CardTitle, CardText, CardButton } from './styles';

interface HeroCardProps {
  title: string;
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function HeroCard({ title, text, buttonText, onButtonClick }: HeroCardProps) {
  return (
    <CardContainer>
      <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
      
      <CardText>{text}</CardText>

      <CardButton onClick={onButtonClick}>
        {buttonText}
      </CardButton>
    </CardContainer>
  );
}