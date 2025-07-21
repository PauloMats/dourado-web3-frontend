import styled from 'styled-components';
import { pxToRem } from '../../utils/utils';
import { colors } from '../../assets/scss/colors';

export const SectionWrapper = styled.section`

  background-image: url('/img/background-dourado.png');
  background-color: #111;
  background-size: cover;
  background-position: center;
  padding: 8rem 0;
  position: relative;
  
   // Overlay escuro opcional para legibilidade
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const LinkButton = styled.a`
  color: ${colors.primary.bdm3}; 
  font-weight: bold;
  font-size: ${pxToRem(16)};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; // Espaço entre o texto e a seta
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    color: #FFC72C; 
    transform: translateX(4px);
  }
`;