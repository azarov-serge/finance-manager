import { useState } from 'react';
import type { MouseEvent } from 'react';
import i18n from '@languages/i18n';

export const useAppHeader = (): {
	isMenuOpenend: boolean;
	currentPath: string;
	language: string;
	handleMenuClick: () => void;
	handleToogleLanguageClick: (evt: MouseEvent<HTMLLIElement>) => void;
} => {
	const [isMenuOpenend, setIsMenuOpenend] = useState(false);
	const currentPath =
		window.location.pathname === '' ? '/' : window.location.pathname;

	const handleMenuClick = (): void => {
		setIsMenuOpenend(!isMenuOpenend);
	};

	const handleToogleLanguageClick = (
		evt: MouseEvent<HTMLLIElement>,
	): void => {
		const target = evt.target as HTMLLIElement;
		const language = target.getAttribute('data-lang');

		if (language) {
			void i18n.changeLanguage(language);
		}
	};

	return {
		isMenuOpenend,
		currentPath,
		language: i18n.language,
		handleMenuClick,
		handleToogleLanguageClick,
	};
};
