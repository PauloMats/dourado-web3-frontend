import styled from 'styled-components';
import { pxToRem } from '@/utils/utils';
import { colors } from '@/assets/scss/colors';

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`;

export const Label = styled.label`
  color: ${colors.primary.bdm4}; /* Branco */
  font-size: ${pxToRem(14)};
`;

const commonInputStyles = `
  background-color: ${colors.primary.bdm8}; /* Cinza escuro #1A1A1A */
  border: 1px solid #333;
  color: ${colors.primary.bdm4};
  padding: ${pxToRem(12)} ${pxToRem(16)};
  border-radius: ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary.bdm3}; /* Borda amarela no foco */
  }
`;

export const Input = styled.input`
  ${commonInputStyles}
`;

export const Textarea = styled.textarea`
  ${commonInputStyles}
  min-height: ${pxToRem(150)};
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.primary.bdm3};
  color: ${colors.primary.bdm5};
  font-weight: bold;
  padding: ${pxToRem(14)} ${pxToRem(24)};
  border-radius: ${pxToRem(8)};
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(8)};
  cursor: pointer;

  &:hover {
    background-color: #FFDE59;
  }
`;
