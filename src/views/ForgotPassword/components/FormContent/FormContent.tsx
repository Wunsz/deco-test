import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import TextInput from 'components/TextInput/TextInput';
import Button from 'components/Button/Button';

export interface FormContentProps {}

const FormContent: FC<FormContentProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('forgot.title')}</h1>
      <TextInput name="name" label={t('forgot.name')} type="text" />
      <TextInput name="email" label={t('forgot.email')} type="email" />
      <Button type="submit">{t('forgot.remind')}</Button>
    </>
  );
};

export default FormContent;
