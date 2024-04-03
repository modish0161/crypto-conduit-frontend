import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.h3`
  color: #00ffae;
  margin: 0;
  padding: 15px;
  font-size: 1.5em;
`;

interface CardTitleProps {
    children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
    return <StyledCardTitle>{children}</StyledCardTitle>;
};
