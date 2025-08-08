import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

// Wrapper principal da seção
export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm9}; /* Preto #161516 */
  padding-top: ${pxToRem(80)};
  padding-bottom: ${pxToRem(80)};
`;

// Lista de features com o marcador de ponto
export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${pxToRem(24)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(12)};

  li {
    position: relative;
    padding-left: ${pxToRem(20)};
    color: ${colors.primary.bdm10}; /* Cinza #A0A1A8 */
    font-size: ${pxToRem(16)};
    line-height: 1.5;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0;
      color: ${colors.primary.bdm3}; /* Amarelo #FFC700 */
      font-weight: bold;
      font-size: ${pxToRem(20)};
    }
  }
`;

// Título final da seção
export const FinalTitle = styled.h2`
  text-align: center;
  color: ${colors.primary.bdm4}; /* Branco */
  font-weight: bold;
  margin-top: ${pxToRem(80)};
  font-size: ${pxToRem(40)};

  span {
    color: ${colors.primary.bdm3}; /* Amarelo #FFC700 */
  }
`;
