import type { Theme } from '@emotion/react';

import { themes } from '@ui-kit/themes/index';
import { useStores } from '../store/hooks/use-store';

export const useTheme = (): {
	theme: Theme;
} => {
	const { settingsStore } = useStores();

	return {
		theme: themes[settingsStore.themeName],
	};
};
