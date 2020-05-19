import componentsEn from '@/i18n/lang/components/en.ts';
import generalEn from '@/i18n/lang/general/en.ts';
import veeValidateEn from '@/i18n/lang/vee-validate/en.ts';
import logInEn from '@/i18n/lang/auth/logIn/en.ts';

import componentsRu from '@/i18n/lang/components/ru.ts';
import generalRu from '@/i18n/lang/general/ru.ts';
import veeValidateRu from '@/i18n/lang/vee-validate/ru.ts';
import logInRu from '@/i18n/lang/auth/logIn/ru.ts';

export default {
  en: {
    ...componentsEn,
    ...generalEn,
    ...veeValidateEn,
    ...{ auth: { ...logInEn } }
  },
  ru: {
    ...componentsRu,
    ...generalRu,
    ...veeValidateRu,
    ...{ auth: { ...logInRu } }
  }
};
