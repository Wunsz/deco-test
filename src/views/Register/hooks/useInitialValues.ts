import { useMemo } from 'react';

const useInitialValues = () =>
  useMemo(
    () => ({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    }),
    [],
  );

export default useInitialValues;
