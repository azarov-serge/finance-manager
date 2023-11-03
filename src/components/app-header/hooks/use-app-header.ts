import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { pathToTitle } from '../app-header.constants';

export const useAppHeader = (): {
	isMenuOpenend: boolean;
	currentPath: string;
	title: string;
	handleMenuClick: () => void;
	handleMenuItemClick: MouseEventHandler;
} => {
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

	return {
		isMenuOpenend,
		currentPath,
		title: path ? pathToTitle[path] || '' : pathToTitle.payments,
		handleMenuClick,
		handleMenuItemClick,
	};
};
