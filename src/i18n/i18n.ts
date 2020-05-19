import Vue from 'vue';
import VueI18n from 'vue-i18n';
import message from '@/i18n/lang/moduleLang';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: message,
  silentTranslationWarn: true
});
