import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  margin-right: 10px;

  &::placeholder {
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00ffae;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = (props) => {
    return <StyledInput {...props} />;
};
