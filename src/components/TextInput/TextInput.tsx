import React, { ChangeEventHandler, FC, useCallback, useId } from 'react';
import styled from 'styled-components';

import useFormikConnection from 'hooks/useFormikConnection/useFormikConnection';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 8px;
  position: relative;
`;

const Error = styled.span`
  color: #af0000;
  font-size: 12px;
  padding-left: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  width: 100%;
  position: relative;

  &:focus,
  &:active {
    border: 1px solid #b4b4b4;
    outline: none;
  }

  &:focus,
  &:focus-within,
  &:active,
  :not(:placeholder-shown) {
    & + label {
      color: #b4b4b4;
      transform: translate(-8px, -22px);
      background: white;
    }
  }
`;

const Label = styled.label`
  color: #c0c0c0;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  padding: 0 2px;
  transition: transform 50ms ease-in-out, background 25ms 25ms ease-in-out;
`;

export interface TextInputProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password';
}

const TextInput: FC<TextInputProps> = ({ name, label, type = 'text' }: TextInputProps) => {
  const id = useId();
  const { value, error, touched, setValue, onFocus, onBlur } = useFormikConnection<string, HTMLInputElement>(name);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [setValue],
  );

  return (
    <Root>
      <Input
        placeholder=" "
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
        name={name}
        type={type}
      />
      <Label htmlFor={id}>{label}</Label>
      {touched && error && <Error>{error}</Error>}
    </Root>
  );
};

export default TextInput;
