"use client";

import { Container, Title, Text } from './styles';
import { Props } from './typo';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Card({ className, title, text, image, gap, variant = 'default' }: Props) {
  return (
    <Container className={`card flex flex-col gap-${gap ?? 3} ${className}`}>
      {image && (
        <LazyLoadImage className="max-w-[10%] me-auto" alt={title} src={image} />
      )}
      {title && (
        <Title $variant={variant} dangerouslySetInnerHTML={{ __html: title }} />
      )}
      {text && (
        <Text $variant={variant} dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </Container>
  );
}
