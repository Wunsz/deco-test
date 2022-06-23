import React, { FC } from 'react';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import TextInput from 'components/TextInput/TextInput';
import Button from 'components/Button/Button';

import useSchema from './hooks/useSchema';
import useInitialValues from './hooks/useInitialValues';

import SplashImage from './components/SplashImage/SplashImage';

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

export interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { t } = useTranslation();
  const schema = useSchema();
  const initialValues = useInitialValues();

  return (
    <Root>
      <SplashImage maxDisplayWidth={600} />
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={console.log}>
        <StyledForm>
          <h1>{t('login.title')}</h1>
          <TextInput name="email" label={t('login.email')} type="email" />
          <TextInput name="password" label={t('login.password')} type="password" />
          <Button type="submit">{t('login.login')}</Button>
        </StyledForm>
      </Formik>
    </Root>
  );
};

export default Login;
