import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #000;
  padding: 6rem 0;
`;

export const FormWrapper = styled.div`
  background-color: #1a1a1a; 
  border-radius: 0.5rem; // rounded-lg
  padding: 0.5rem;
  padding-left: 1.5rem; // pl-6
  display: flex;
  align-items: center;
  border: 1px solid #333;

  &:focus-within {
    border-color: #FFD700; 
  }
`;