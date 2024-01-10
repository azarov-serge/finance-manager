import type { Theme } from '@emotion/react';

import { colors } from './colors';

export const button: Theme['button'] = {
	primary: colors.primary,
	secondary: 'transparent',
	danger: colors.danger,
	caption: {
		primary: colors.text,
		secondary: colors.text,
		danger: colors.danger,
	},
};
