import { useState } from 'react';
import type { MouseEventHandler, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { ThemeName } from '@emotion/react';

import { useLanguage, useThemeName } from '@hooks';
import { isThemeName } from '@utils';
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
	const location = useLocation();
	const navigate = useNavigate();
	const [isMenuOpenend, setIsMenuOpenend] = useState(false);
	const currentPath = location.pathname === '' ? '/' : location.pathname;
	const path = currentPath.replace('/', '');
	const { themeName, setThemeName } = useThemeName();
	const { language, setLanguage } = useLanguage();

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
			setLanguage(language);
		}
	};

	const handleThemeClick = (evt: MouseEvent<HTMLLIElement>): void => {
		const target = evt.currentTarget as HTMLLIElement;
		const name = target.getAttribute('data-theme');

		if (isThemeName(name)) {
			setThemeName(name);
		}
	};

	return {
		isMenuOpenend,
		currentPath,
		title: path ? pathToTitle[path] || '' : pathToTitle.home,
		handleMenuClick,
		handleMenuItemClick,
		language,
		handleToogleLanguageClick,
		themeName,
		handleThemeClick,
	};
};
