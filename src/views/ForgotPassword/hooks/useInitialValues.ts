import { useMemo } from 'react';

const useInitialValues = () =>
  useMemo(
    () => ({
      name: '',
      email: '',
    }),
    [],
  );

export default useInitialValues;
