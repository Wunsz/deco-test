import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import * as yup from 'yup';

const useSchema = (): yup.ObjectSchema<any> => {
  const { t } = useTranslation();

  return useMemo(
    () =>
      yup.object({
        name: yup
          .string()
          .min(3, t('validation.nameTooShort'))
          .matches(/^\w*$/, {
            excludeEmptyString: true,
            message: t('validation.alphanumeric'),
          })
          .required(t('validation.required')),
        email: yup.string().email(t('validation.invalidEmail')).required(t('validation.required')),
        password: yup
          .string()
          .min(8, t('validation.passwordTooShort'))
          .max(30, t('validation.passwordTooLong'))
          .matches(/^.*[A-Z].*$/, { message: t('validation.passwordMissingUpperCase') })
          .matches(/^.*[a-z].*$/, { message: t('validation.passwordMissingLowerCase') })
          .matches(/^.*[0-9].*$/, { message: t('validation.passwordMissingNumeric') })
          .matches(/^.*[!@#$%^&*_\-+|].*$/, { message: t('validation.passwordMissingSpecialCharacter') })
          .required(t('validation.required')),
        repeatPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], t('validation.passwordsDoNotMatch'))
          .required(t('validation.required')),
      }),
    [t],
  );
};

export default useSchema;
