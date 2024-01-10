import { useCallback, useEffect } from 'react';
import { type ThemeName } from '@emotion/react';

import { useAppDispatch, useAppSelector } from '@hooks';
import { settingsActions, settingsSelectors } from '@store';
import { isThemeName } from '@utils/type-guards';
import { CookiesManager } from '@utils/cookies-manager';

export const useThemeName = (): {
	themeName: ThemeName;
	setThemeName: (themeName: ThemeName) => void;
} => {
	const dispatch = useAppDispatch();
	const themeName = useAppSelector(settingsSelectors.getThemeName);

	const setThemeName = useCallback((themeName: ThemeName): void => {
		CookiesManager.setThemeName(themeName);

		dispatch(settingsActions.setThemeName(themeName));
	}, []);

	useEffect(() => {
		const cachedThemeName = CookiesManager.getThemeName();
		if (!cachedThemeName || !isThemeName(cachedThemeName)) {
			setThemeName(themeName);

			return;
		}

		if (cachedThemeName !== themeName) {
			setThemeName(cachedThemeName);
		}
	}, []);

	return {
		themeName,
		setThemeName,
	};
};
