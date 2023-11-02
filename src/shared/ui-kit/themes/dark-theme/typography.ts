import type { Theme } from '@emotion/react';
import { colors } from './colors';

export const typography: Theme['typography'] = {
	text: {
		fontFamily: 'Arial, sans-serif',
		color: colors.text,
	},
	title1: {
		fontFamily: 'Arial, sans-serif',
		color: colors.text,
		fontSize: '28px',
	},
	title2: {
		fontFamily: 'Arial, sans-serif',
		color: colors.text,
		fontSize: '24px',
	},
	title3: {
		fontFamily: 'Arial, sans-serif',
		color: colors.text,
		fontSize: '20px',
	},
	title4: {
		fontFamily: 'Arial, sans-serif',
		color: colors.text,
		fontSize: '18px',
	},
	title5: {
		fontFamily: 'Arial, sans-serif',
		color: colors.text,
		fontSize: '16px',
	},
};
