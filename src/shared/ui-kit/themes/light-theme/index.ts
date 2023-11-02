import type { Theme } from '@emotion/react';

import { darkTheme } from '../dark-theme';
import { colors } from './colors';
import { typography } from './typography';
import { appHeader } from './app-header';
import { button } from './button';

export const lightTheme: Theme = {
	...darkTheme,
	colors,
	typography,
	appHeader,
	button,
};
