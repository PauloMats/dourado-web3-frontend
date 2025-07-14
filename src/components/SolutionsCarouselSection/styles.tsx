import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #000;
  padding: 6rem 0; // py-24
  position: relative;
`;

export const Embla = styled.div`
  overflow: hidden;
`;

export const EmblaViewport = styled.div`

`;

export const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 33.33%; // Mostra 3 slides por vez em telas grandes
  min-width: 0;
  padding-left: 1rem; // gap
  padding-right: 1rem; // gap

  @media (max-width: 1024px) {
    flex: 0 0 50%; // 2 slides em tablets
  }

  @media (max-width: 768px) {
    flex: 0 0 100%; // 1 slide em mobile
  }
`;