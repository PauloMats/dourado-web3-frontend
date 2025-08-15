import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

export const SectionWrapper = styled.section`
  background-color: ${colors.primary.bdm9}; 
  padding: ${pxToRem(100)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MainTitle = styled.h1`
  color: ${colors.primary.bdm4}; /* Branco */
  font-weight: bold;
  font-size: ${pxToRem(100)};
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  color: ${colors.primary.bdm10}; /* Cinza */
  font-size: ${pxToRem(18)};
  max-width: ${pxToRem(450)};
  margin-top: ${pxToRem(24)};
  margin-bottom: ${pxToRem(32)};
`;

export const RegisterButton = styled.a`
  display: inline-block;
  background-color: ${colors.primary.bdm3}; /* Amarelo */
  color: ${colors.primary.bdm5}; /* Preto */
  font-weight: bold;
  padding: ${pxToRem(14)} ${pxToRem(28)};
  border-radius: ${pxToRem(8)};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFDE59;
    transform: scale(1.05);
  }
`;
