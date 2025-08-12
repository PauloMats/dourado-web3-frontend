import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${pxToRem(24)};
`;

export const PreTitle = styled.h4`
  color: ${colors.primary.bdm3}; /* Amarelo */
  font-weight: bold;
  font-size: ${pxToRem(16)};
  text-transform: uppercase;
`;

export const MainTitle = styled.h2`
  color: ${colors.primary.bdm4}; /* Branco */
  font-weight: bold;
  font-size: ${pxToRem(40)};
  line-height: 1.3;
`;

export const Subtitle = styled.p`
  color: ${colors.primary.bdm10}; /* Cinza claro */
  font-size: ${pxToRem(16)};
  line-height: 1.6;
`;

export const StyledButton = styled.a`
  display: inline-block;
  background-color: ${colors.primary.bdm3};
  color: ${colors.primary.bdm5};
  font-weight: bold;
  padding: ${pxToRem(12)} ${pxToRem(32)};
  border-radius: ${pxToRem(8)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFDE59; // Um amarelo mais claro
  }
`;
