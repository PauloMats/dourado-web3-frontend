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
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scrollAnimation} 30s linear infinite;

`;