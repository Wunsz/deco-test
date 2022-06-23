import React, { FC, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
  background: none;
  position: relative;
  cursor: pointer;

  //  background: linear-gradient(45deg, #da7f6e 0, #da74ae 50%, #678cd0 100%);

  &:focus,
  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &:active {
    &::after {
      filter: brightness(90%);
    }
  }

  &::after {
    transition: opacity 100ms ease-in-out, filter 100ms ease-in-out;
    opacity: 0.8;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    border-radius: 4px;
    background: linear-gradient(45deg, #ee6b56 0, #e6339c 50%, #4180eb 100%);
  }
`;

const Button: FC<ButtonProps> = ({ ...props }) => {
  return <StyledButton {...props} />;
};

export default Button;
