import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './lang/en';
import pl from './lang/pl';

const AVAILABLE_LANGUAGES = {
  en,
  pl,
};

export const AVAILABLE_LANG_CODES = Object.keys(AVAILABLE_LANGUAGES);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'common',
  });

export default i18n;
