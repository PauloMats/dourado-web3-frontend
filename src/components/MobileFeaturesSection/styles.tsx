import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm6};
  padding-top: ${pxToRem(80)};
  padding-bottom: ${pxToRem(80)};
  overflow: hidden; 
`;

// Título principal da seção
export const MainTitle = styled.h2`
  text-align: center;
  color: ${colors.primary.bdm3}; /* Amarelo */
  font-weight: bold;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(200)};
`;

// Texto de descrição abaixo/acima do celular
export const DescriptionText = styled.p`
  color: ${colors.primary.bdm4}; /* Branco */
  font-size: ${pxToRem(16)};
  text-align: center;
  max-width: ${pxToRem(250)}; 
  line-height: 1.5;
`;
