import React from 'react';
import styled from 'styled-components';

const StyledCardContent = styled.div`
  padding: 15px;
`;

interface CardContentProps {
    children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
    return <StyledCardContent>{children}</StyledCardContent>;
};
