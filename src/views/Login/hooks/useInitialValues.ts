import { useMemo } from 'react';

const useInitialValues = () =>
  useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );

export default useInitialValues;
