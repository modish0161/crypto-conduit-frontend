import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #00ffae;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00d9a2;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button: React.FC<ButtonProps> = (props) => {
    return <StyledButton {...props} />;
};
