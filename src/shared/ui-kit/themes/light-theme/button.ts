import type { Theme } from '@emotion/react';

import { colors } from './colors';

export const button: Theme['button'] = {
	primary: colors.accent,
	secondary: colors.secondary,
	danger: colors.danger,
	caption: {
		primary: colors.surface,
		secondary: colors.text,
		danger: colors.danger,
	},
};
