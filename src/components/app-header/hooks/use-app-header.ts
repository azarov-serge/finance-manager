import { useState } from 'react';
import type { MouseEventHandler, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from '@languages/i18n';
import type { ThemeName } from '@emotion/react';
import { useStores } from '@store/hooks/use-store';

import { pathToTitle } from '../constants';
import type { AppHeaderProps } from '../types';

export const useAppHeader = (
	props: AppHeaderProps,
): {
	isMenuOpenend: boolean;
	currentPath: string;
	title: string;
	handleMenuClick: () => void;
	handleMenuItemClick: MouseEventHandler;
	language: string;
	handleToogleLanguageClick: (evt: MouseEvent<HTMLLIElement>) => void;
	themeName: ThemeName;
	handleThemeClick: (evt: MouseEvent<HTMLLIElement>) => void;
} => {
	const { settingsStore } = useStores();
	const location = useLocation();
	const navigate = useNavigate();
	const [isMenuOpenend, setIsMenuOpenend] = useState(false);
	const currentPath = location.pathname === '' ? '/' : location.pathname;
	const path = currentPath.replace('/', '');

	const handleMenuClick = (): void => {
		setIsMenuOpenend(!isMenuOpenend);
	};

	const handleMenuItemClick: MouseEventHandler<HTMLAnchorElement> = (
		evt,
	): void => {
		evt.preventDefault();

		navigate(evt.currentTarget?.pathname);
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

	const handleThemeClick = (evt: MouseEvent<HTMLLIElement>): void => {
		const target = evt.currentTarget as HTMLLIElement;
		const name = target.getAttribute('data-theme') as ThemeName;

		if (name) {
			settingsStore.themeName = name;
		}
	};

	return {
		isMenuOpenend,
		currentPath,
		title: path ? pathToTitle[path] || '' : pathToTitle.home,
		handleMenuClick,
		handleMenuItemClick,
		language: i18n.language,
		handleToogleLanguageClick,
		themeName: settingsStore.themeName,
		handleThemeClick,
	};
};
