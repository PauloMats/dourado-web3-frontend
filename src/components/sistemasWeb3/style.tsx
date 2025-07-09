'use client';
import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem; 
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem; /* Espaçamento entre os itens */

  @media (max-width: 768px) { 
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #1a202c; 
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

export const FullWidthImageContainer = styled.div`
  width: 100%;
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: #4c51bf;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #667eea;
  }
`;