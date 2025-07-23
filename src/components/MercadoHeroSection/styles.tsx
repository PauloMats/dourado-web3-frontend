import styled from 'styled-components';
import { pxToRem } from '../../utils/utils';

export const SectionWrapper = styled.section`
  background-image: url('/img/bg-coins.png');
  background-color: #0A0A0A;
  background-size: cover;
  background-position: center bottom;
  padding: 12rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.8) 00%, rgba(0,0,0,0.4) 10%);
  }
`;

export const TitleImageWrapper = styled.div`
  position: relative;
  width: fit-content; // Ajusta a largura ao conteúdo da imagem
`;

// Itens de Estatística
export const StatValue = styled.p`
  font-size: ${pxToRem(48)};
  font-weight: bold;
  color: #FFFFFF;
  line-height: 1.1;
`;

export const StatTitle = styled.h4`
  font-size: ${pxToRem(18)};
  color: #FFFFFF;
  margin-top: 0.25rem;
`;

export const StatDescription = styled.p`
  font-size: ${pxToRem(14)};
  color: #A0A0A0; // Um cinza para o texto de suporte
  margin-top: 0.5rem;
`;