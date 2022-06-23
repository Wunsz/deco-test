import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from 'redux/store';
import { remindPassword, resetRemindedUser } from 'redux/slices/users';
import RemindPasswordCredentials from 'types/remindPasswordCredentials';

import useSchema from './hooks/useSchema';
import useInitialValues from './hooks/useInitialValues';

import FormContent from './components/FormContent/FormContent';
import Success from './components/Success/Success';
import Error from './components/Error/Error';

export interface ForgotPasswordProps {}

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

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const schema = useSchema();
  const initialValues = useInitialValues();
  const dispatch = useAppDispatch();
  const [recoveryAttempted, setRecoveryAttempted] = useState(false);

  const recoveredPassword = useSelector((state: RootState) => state.user.remindedUser?.password);

  useEffect(
    () => () => {
      dispatch(resetRemindedUser());
    },
    [dispatch],
  );

  const handleRemindPassword = useCallback(
    (values: RemindPasswordCredentials) => {
      dispatch(remindPassword(values));
      setRecoveryAttempted(true);
    },
    [dispatch],
  );

  return (
    <Root>
      <Formik<RemindPasswordCredentials>
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleRemindPassword}
      >
        <StyledForm>
          {recoveredPassword ? <Success /> : <FormContent />}
          {!recoveredPassword && recoveryAttempted && <Error />}
        </StyledForm>
      </Formik>
    </Root>
  );
};

export default ForgotPassword;
