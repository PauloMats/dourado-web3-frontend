import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

// Wrapper principal da seção
export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm7}; /* #1B1F28 */
  padding: ${pxToRem(100)} 0;
`;

// Container para o grid de imagens
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: ${pxToRem(16)};

  /* A primeira imagem ocupa as duas colunas */
  & > div:first-child {
    grid-column: span 2;
  }
`;
