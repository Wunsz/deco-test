import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import * as yup from 'yup';

const useSchema = (): yup.ObjectSchema<any> => {
  const { t } = useTranslation();

  return useMemo(
    () =>
      yup.object({
        name: yup.string().required(t('validation.required')),
        email: yup.string().email(t('validation.invalidEmail')).required(t('validation.required')),
      }),
    [t],
  );
};

export default useSchema;
