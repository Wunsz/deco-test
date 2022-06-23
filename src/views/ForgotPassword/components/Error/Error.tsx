import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: #af0000;
`;

export interface ErrorProps {}

const Error: FC<ErrorProps> = () => {
  const { t } = useTranslation();

  return <ErrorText>{t('forgot.failure')}</ErrorText>;
};

export default Error;
