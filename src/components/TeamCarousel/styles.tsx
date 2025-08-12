import styled, { keyframes } from 'styled-components';
import { pxToRem } from '@/utils/utils';

const scrollAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  /* Efeito de fade nas laterais para dar a impressão de infinito */
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scrollAnimation} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const TeamMemberItem = styled.div`
  flex-shrink: 0;
  padding: 0 ${pxToRem(12)}; /* Espaçamento entre as imagens */
`;
