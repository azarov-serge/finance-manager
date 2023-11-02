import type { Theme } from '@emotion/react';

import { colors } from './colors';
import { appHeader } from './app-header';
import { appFooter } from './app-footer';
import { typography } from './typography';
import { button } from './buttons';

export const darkTheme: Theme = {
	size: {
		mobileWidth: 320,
		tabletWidth: 660,
		desktopWidth: 960,
	},
	defaultPadding: '0 20px',
	borderRadius: 5,
	colors,
	appHeader,
	appFooter,
	typography,
	button,
};
