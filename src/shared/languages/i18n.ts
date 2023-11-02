import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLanguage } from '@utils/languages';

import { en } from './en';
import { ru } from './ru';

const currentLanguage = getCurrentLanguage();

void i18n.use(initReactI18next).init({
	lng: currentLanguage,
	fallbackLng: currentLanguage,
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en,
		ru,
	},
});

export default i18n;
