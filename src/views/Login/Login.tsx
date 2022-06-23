import React, { FC, useCallback } from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import TextInput from 'components/TextInput/TextInput';
import Button from 'components/Button/Button';
import { RootState, useAppDispatch } from 'redux/store';
import { login } from 'redux/slices/users';
import Credentials from 'types/credentials';

import useSchema from './hooks/useSchema';
import useInitialValues from './hooks/useInitialValues';

import SplashImage from './components/SplashImage/SplashImage';
import { useSelector } from 'react-redux';

const Root = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 3fr 2fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 0 1fr;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-shadow: #00000030 0 0 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  padding: 15px 40px;
`;

const ErrorText = styled.p`
  color: #af0000;
`;

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { t } = useTranslation();
  const schema = useSchema();
  const initialValues = useInitialValues();

  const dispatch = useAppDispatch();
  const loginError = useSelector((state: RootState) => state.user.loginError);

  const handleLogin = useCallback(
    (values: Credentials) => {
      dispatch(login(values));
    },
    [dispatch],
  );

  return (
    <Root>
      <SplashImage maxDisplayWidth={600} />
      <Formik<Credentials> initialValues={initialValues} validationSchema={schema} onSubmit={handleLogin}>
        <StyledForm>
          <h1>{t('login.title')}</h1>
          <TextInput name="email" label={t('login.email')} type="email" />
          <TextInput name="password" label={t('login.password')} type="password" />
          <LinkContainer>
            <Link to="/register">{t('login.register')}</Link>
            <Link to="/forgot-password">{t('login.forgotPassword')}</Link>
          </LinkContainer>
          <StyledButton type="submit">{t('login.login')}</StyledButton>
          {loginError && <ErrorText>{t(loginError)}</ErrorText>}
        </StyledForm>
      </Formik>
    </Root>
  );
};

export default Login;
