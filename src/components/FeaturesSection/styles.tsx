import styled from "styled-components";

export const FeaturesSectionWrapper = styled.section`
  // TODO: Substitua pelo caminho do seu background
  background-image: url('/img/dark-background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 6rem 0; // py-24

  // Overlay escuro opcional para legibilidade
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const CardContainer = styled.div`
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  color: #FFD700; // Cor dourada/amarela do título
  font-weight: 600; // semibold
`;

export const CardText = styled.p`
  color: #D1D5DB; // text-gray-300
`;