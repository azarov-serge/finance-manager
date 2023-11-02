export const LANGUAGES = ['en', 'ru'] as const;

export const languageToTitle: Record<(typeof LANGUAGES)[number], string> = {
	en: 'en: English',
	ru: 'ru: Russian',
};
