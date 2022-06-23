import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button/Button';
import styled from 'styled-components';

export interface SuccessProps {
  recoveredPassword: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Password = styled.p`
  font-size: 24px;
  line-height: 24px;
  background-color: #f0f0f0;
  width: 100%;
  text-align: center;
  padding: 10px 4px 4px 4px;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  font-family: monospace;
`;

const Success: FC<SuccessProps> = ({ recoveredPassword }) => {
  const { t } = useTranslation();

  return (
    <Root>
      <span>{t('forgot.success')}</span>
      <Password>{recoveredPassword}</Password>
      <Button type="button">{t('forgot.login')}</Button>
    </Root>
  );
};

export default Success;
