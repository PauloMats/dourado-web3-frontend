import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

// Wrapper principal da seção
export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm7}; /* #1B1F28 */
  padding: ${pxToRem(120)} 0;
  position: relative;
  overflow: hidden;

  /* Efeito de gradiente no fundo para dar profundidade */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(circle at 100% 50%, rgba(234, 179, 23, 0.15), transparent 70%);
  }
`;

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${pxToRem(500)};
`;

// Texto posicionado no canto inferior esquerdo
export const BottomText = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${colors.primary.bdm4}; /* Branco */
  font-size: ${pxToRem(32)};
  font-weight: bold;
  line-height: 1.4;
  max-width: ${pxToRem(350)};

  strong {
    color: ${colors.primary.bdm3}; /* Amarelo */
  }
`;
