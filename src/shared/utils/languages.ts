export const getCurrentLanguage = (): string => {
	const currentLang = window.navigator.language.toLowerCase();

	if (currentLang.includes('ru')) {
		return 'ru';
	}

	return 'en';
};
