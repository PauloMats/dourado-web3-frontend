import styled, { keyframes } from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

const scrollLeft = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0%); }
`;

export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm7};
  padding: ${pxToRem(80)} 0;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  margin: ${pxToRem(20)} 0;
`;

interface CarouselTrackProps {
  direction?: 'left' | 'right';
}

export const CarouselTrack = styled.div<CarouselTrackProps>`
  display: flex;
  width: fit-content;
  animation: ${({ direction }) => direction === 'right' ? scrollRight : scrollLeft} 60s linear infinite;
`;

export const LogoItem = styled.div`
  flex-shrink: 0;
  padding: 0 ${pxToRem(24)};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: ${pxToRem(250)};
    height: auto;
    border-radius: ${pxToRem(40)};
  }
`;
