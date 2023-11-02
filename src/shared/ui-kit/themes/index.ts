import type { ThemeName, Theme } from '@emotion/react';

import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';

export const DEFAULT_THEME_NAME: ThemeName = 'dark';

export const themes: Record<ThemeName, Theme> = {
	dark: darkTheme,
	light: lightTheme,
};
