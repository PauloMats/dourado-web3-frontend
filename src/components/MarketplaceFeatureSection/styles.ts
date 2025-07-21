import styled from "styled-components";
import { colors } from '../../assets/scss/colors';

export const SectionWrapper = styled.section`
  background-color: #0A0A0A;
  padding: 8rem 0;
  overflow: hidden;
  position: relative;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.5rem; // Espaço para o marcador
    margin-bottom: 2rem; // Espaço entre os itens
    
    // O marcador amarelo
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem; 
      transform: translateY(-50%);
      width: 0.5rem; // 8px
      height: 0.5rem; // 8px
      background-color: ${colors.primary.bdm3};
      border-radius: 50%;
    }
  }
`;

// Botão principal
export const ExploreButton = styled.a`
  display: inline-block;
  background-color: ${colors.primary.bdm3};
  color: #000000;
  font-weight: bold;
  padding: 0.875rem 2.5rem; // py-3.5 px-10
  border-radius: 9999px; // rounded-full
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #FFC72C;
    transform: scale(1.05);
  }
`;