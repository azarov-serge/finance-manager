import React from 'react';
import type { ThemeName } from '@emotion/react';
import DarkThemeIcon from '@ui-kit/assets/icons/moon.inline.svg';
import LightThemeIcon from '@ui-kit/assets/icons/sun.inline.svg';

export const THEME_NAMES: ThemeName[] = ['dark', 'light'];

export const themeNameToTitle: Record<ThemeName, string> = {
	dark: 'Dark',
	light: 'Light',
};

export const themeNameToIcon: Record<ThemeName, JSX.Element> = {
	dark: <DarkThemeIcon width="16px" height="16px" />,
	light: <LightThemeIcon width="16px" height="16px" />,
};
