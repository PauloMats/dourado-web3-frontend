import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-image: url('/img/background-dourado2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 4rem; // 16 (py-16)
  padding-bottom: 4rem; // 16 (py-16)
  min-height: 100vh;
  align-items: center;

  > * {
    position: relative;
    z-index: 2;
  }
`;