import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm5}; /* Preto */
  padding: ${pxToRem(100)} 0;
`;

export const PreTitle = styled.h4`
  color: ${colors.primary.bdm3}; /* Amarelo */
  font-weight: bold;
  font-size: ${pxToRem(16)};
  text-align: center;
  margin-bottom: ${pxToRem(16)};
`;

export const Title = styled.h2`
  color: ${colors.primary.bdm4}; /* Branco */
  font-weight: bold;
  font-size: ${pxToRem(48)};
  text-align: center;
  margin-bottom: ${pxToRem(64)};
`;

export const MetricValue = styled.p`
  color: ${colors.primary.bdm4};
  font-weight: bold;
  font-size: ${pxToRem(56)};
  line-height: 1;
`;

export const MetricLabel = styled.p`
  color: ${colors.primary.bdm10}; /* Cinza */
  font-size: ${pxToRem(16)};
  margin-top: ${pxToRem(8)};
`;
