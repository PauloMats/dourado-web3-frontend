"use client";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardContainer, CardTitle, CardText } from './styles';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <CardContainer className="text-center flex flex-col items-center">
      <LazyLoadImage
        src={icon}
        alt={`${title} icon`}
        className="h-10 mb-4"
      />
      <CardTitle className="text-lg mb-2">
        {title}
      </CardTitle>
      <CardText className="text-sm leading-relaxed">
        {description}
      </CardText>
    </CardContainer>
  );
}