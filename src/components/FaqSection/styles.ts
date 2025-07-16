import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #111; 
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/faq-background-wave.png');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    opacity: 0.1; 
  }
`;

export const FaqAnswerWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`;