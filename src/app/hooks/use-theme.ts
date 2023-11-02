import { useState } from 'react';

import type { MouseEvent } from 'react';
import type { ThemeName, Theme } from '@emotion/react';

import { themes } from '@ui-kit/themes/index';

export const useTheme = (): {
	theme: Theme;
	themeName: ThemeName;
	handleThemeClick: (evt: MouseEvent<HTMLLIElement>) => void;
} => {
	const [themeName, setThemeName] = useState<ThemeName>('dark');

	const handleThemeClick = (evt: MouseEvent<HTMLLIElement>): void => {
		const target = evt.currentTarget as HTMLLIElement;
		const name = target.getAttribute('data-theme') as ThemeName;

		if (name) {
			setThemeName(name);
		}
	};

	return {
		theme: themes[themeName],
		themeName,
		handleThemeClick,
	};
};
