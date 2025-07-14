import styled from 'styled-components';
import { pxToRem } from '../../utils/utils';
import { colors } from '../../assets/scss/colors';

interface VariantProps {
  $variant?: 'default' | 'small' | 'large';
}

export const Text = styled.p<VariantProps>`
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case 'small':
        return pxToRem(12);
      case 'large':
        return pxToRem(18);
      default:
        return pxToRem(14);
    }
  }};
  line-height: 1.6;
`;

export const Title = styled.h3<VariantProps>`
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case 'small':
        return pxToRem(20);
      case 'large':
        return pxToRem(32);
      default:
        return pxToRem(24);
    }
  }};
  font-weight: bold;

  span {
    color: ${colors.primary.bdm3};
  }
`;

export const Container = styled.div``;
