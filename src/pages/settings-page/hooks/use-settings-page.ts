import type { MouseEvent } from 'react';
import i18n from '@languages/i18n';
import type { ThemeName } from '@emotion/react';
import { useStores } from '@store/hooks/use-store';

export const useSettingPage = (): {
	language: string;
	handleToogleLanguageClick: (evt: MouseEvent<HTMLLIElement>) => void;
	themeName: ThemeName;
	handleThemeClick: (evt: MouseEvent<HTMLLIElement>) => void;
} => {
	const { settingsStore } = useStores();

	const handleToogleLanguageClick = (
		evt: MouseEvent<HTMLLIElement>,
	): void => {
		const target = evt.target as HTMLLIElement;
		const language = target.getAttribute('data-lang');

		if (language) {
			void i18n.changeLanguage(language);
		}
	};

	const handleThemeClick = (evt: MouseEvent<HTMLLIElement>): void => {
		const target = evt.currentTarget as HTMLLIElement;
		const name = target.getAttribute('data-theme') as ThemeName;

		if (name) {
			settingsStore.themeName = name;
		}
	};

	return {
		language: i18n.language,
		handleToogleLanguageClick,
		themeName: settingsStore.themeName,
		handleThemeClick,
	};
};
