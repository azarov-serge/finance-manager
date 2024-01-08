import type { Theme } from '@emotion/react';

import { themes } from '@ui-kit/themes/index';
import { useThemeName } from '@hooks';

export const useTheme = (): {
	theme: Theme;
} => {
	const { themeName } = useThemeName();

	return {
		theme: themes[themeName],
	};
};
