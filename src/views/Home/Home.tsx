import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import { RootState, useAppDispatch } from 'redux/store';
import { logout } from 'redux/slices/users';

export interface HomeProps {}

const Root = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: #00000030 0 0 20px;
  width: clamp(200px, 50%, 500px);
`;

const Home: FC<HomeProps> = () => {
  const { t } = useTranslation();
  const name = useSelector((state: RootState) => state.user.currentUser?.name);
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Root>
      <Card>
        <h1>{t('home.welcome', { name })}</h1>
        <Button type="button" onClick={handleLogout}>
          {t('home.logout')}
        </Button>
      </Card>
    </Root>
  );
};

export default Home;
