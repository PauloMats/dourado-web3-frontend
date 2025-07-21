import styled from 'styled-components';
import { pxToRem } from '../../utils/utils'; 
import { colors } from '../../assets/scss/colors';

// Wrapper para a seção inteira com a imagem de fundo
export const SectionWrapper = styled.section`
  // TODO: Substitua pelo caminho do seu background de rede
  background-image: url('/img/network-background.png');
  background-color: #111;
  background-size: cover;
  background-position: center;
  padding: 8rem 0; // py-32
`;

// O container do Card
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinha itens à esquerda
  gap: 1.5rem; // gap-6
`;

// Título principal do card
export const CardTitle = styled.h1`
  font-size: ${pxToRem(52)}; // Tamanho grande, ajuste conforme necessário
  font-weight: bold;
  color: #FFFFFF; // Branco
  line-height: 1.2;

  // Estiliza a palavra dentro da tag <span>
  span {
    color: ${colors.primary.bdm3}; // A cor amarela/dourada
  }
`;

// Texto de parágrafo do card
export const CardText = styled.p`
  font-size: ${pxToRem(16)};
  color: #D1D5DB; // Um cinza claro (text-gray-300)
  line-height: 1.6;
  max-width: 90%; // Evita que o texto fique muito largo
`;

// Botão do card
export const CardButton = styled.button`
  background-color: ${colors.primary.bdm3}; // Cor amarela/dourada
  color: #000000; // Preto
  font-weight: bold;
  font-size: ${pxToRem(16)};
  padding: 0.75rem 2rem; // py-3 px-8
  border-radius: 0.5rem; // rounded-lg
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFC72C;
    transform: translateY(-2px);
  }
`;