import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface CardHeaderProps {
    children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return <StyledCardHeader>{children}</StyledCardHeader>;
};
