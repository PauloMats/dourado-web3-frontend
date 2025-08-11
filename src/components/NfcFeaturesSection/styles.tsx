import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm9};
  padding-top: ${pxToRem(80)};
  padding-bottom: ${pxToRem(120)};
  overflow: hidden;
`;

export const MainTitle = styled.h2`
  text-align: center;
  color: ${colors.primary.bdm4};
  font-weight: bold;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(80)};

  span {
    color: ${colors.primary.bdm3}; /* Amarelo #FFC700 */
  }
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* Linha decorativa acima do título */
  &::before {
    content: '';
    display: block;
    width: ${pxToRem(24)};
    height: ${pxToRem(3)};
    background-color: ${colors.primary.bdm3};
    margin-bottom: ${pxToRem(16)};
    border-radius: ${pxToRem(2)};
  }
`;

export const FeatureTitle = styled.h3`
  color: ${colors.primary.bdm4};
  font-size: ${pxToRem(18)};
  font-weight: bold;
  margin-bottom: ${pxToRem(8)};
`;

export const FeatureDescription = styled.p`
  color: ${colors.primary.bdm10};
  font-size: ${pxToRem(16)};
  line-height: 1.5;
  max-width: 90%;
`;
