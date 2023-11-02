import type { Theme } from '@emotion/react';

import { darkTheme } from '../dark-theme';
import { colors } from './colors';

export const appHeader: Theme['appHeader'] = {
	...darkTheme.appHeader,
	background: colors.surface,
};
