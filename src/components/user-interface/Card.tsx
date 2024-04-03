import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: #222;
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <StyledCard>{children}</StyledCard>;
};
