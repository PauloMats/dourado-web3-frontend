import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-image: url('/img/background-dourado.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 4rem; // 16 (py-16)
  padding-bottom: 4rem; // 16 (py-16)

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;