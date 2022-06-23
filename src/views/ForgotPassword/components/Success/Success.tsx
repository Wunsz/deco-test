import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button/Button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../redux/store';
import { login } from '../../../../redux/slices/users';

export interface SuccessProps {}

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

const Success: FC<SuccessProps> = () => {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.user.remindedUser);
  const dispatch = useAppDispatch();

  const handleLogin = useCallback(() => {
    if (user !== undefined) {
      dispatch(login(user));
    }
  }, [dispatch, user]);

  return (
    <Root>
      <span>{t('forgot.success')}</span>
      <Password>{user?.password}</Password>
      <Button type="button" onClick={handleLogin}>
        {t('forgot.login')}
      </Button>
    </Root>
  );
};

export default Success;
