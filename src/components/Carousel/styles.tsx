import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
  align-items: center;
  display: flex;
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scrollAnimation} 30s linear infinite;
  /* Adicionado para garantir o alinhamento vertical de todos os itens */
  align-items: center; 
`;

export const LogoItem = styled.div`
  /* Define um tamanho fixo para o contêiner de cada logo */
  width: 160px;
  height: 80px;

  /* Impede que o item encolha */
  flex-shrink: 0;

  /* Usa flexbox para centralizar a imagem dentro do contêiner */
  display: flex;
  align-items: center;
  justify-content: center;
`;
