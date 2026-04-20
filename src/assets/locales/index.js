import { createI18n } from 'vue-i18n';
import frTranslations from 'locales/fr.json';
import esTranslations from 'locales/es.json';
import enTranslations from 'locales/en.json';

const messages = {
  fr: frTranslations,
  es: esTranslations,
  en: enTranslations
};

// export const i18n = createI18n({
export default createI18n({
  globalInjection: true,
  legacy: false, // set to `false` to use Composition API
  locale: 'fr',
  fallbackLocale: 'fr',
  availableLocales: ['fr', 'en', 'es'],
  messages: messages
});
