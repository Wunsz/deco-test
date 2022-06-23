import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

import TextInput from 'components/TextInput/TextInput';
import Button from 'components/Button/Button';
import { useAppDispatch } from 'redux/store';
import { registerUser } from 'redux/slices/users';
import { useNavigate } from 'react-router-dom';
import User from 'types/user';

import useSchema from './hooks/useSchema';
import useInitialValues from './hooks/useInitialValues';

export interface RegisterProps {}

const Root = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: #00000030 0 0 20px;
  width: clamp(200px, 50%, 500px);
`;

interface ResetForm extends User {
  repeatPassword: string;
}

const Register: FC<RegisterProps> = () => {
  const { t } = useTranslation();
  const schema = useSchema();
  const initialValues = useInitialValues();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = useCallback(
    ({ repeatPassword, ...user }: ResetForm) => {
      dispatch(registerUser(user));
      navigate('/login');
    },
    [dispatch],
  );

  return (
    <Root>
      <Formik<ResetForm> initialValues={initialValues} validationSchema={schema} onSubmit={handleRegister}>
        <StyledForm>
          <h1>{t('register.title')}</h1>
          <TextInput name="name" label={t('register.name')} type="text" />
          <TextInput name="email" label={t('register.email')} type="email" />
          <TextInput name="password" label={t('register.password')} type="password" />
          <TextInput name="repeatPassword" label={t('register.repeatPassword')} type="password" />
          <Button type="submit">{t('register.register')}</Button>
        </StyledForm>
      </Formik>
    </Root>
  );
};

export default Register;
