import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks';
import { settingsActions, settingsSelectors } from '@store';
import { isString } from '@utils/type-guards';
import i18n from '@languages/i18n';
import { CookiesManager } from '@utils/cookies-manager';

export const useLanguage = (): {
	language: string;
	setLanguage: (language: string) => void;
} => {
	const dispatch = useAppDispatch();
	const language = useAppSelector(settingsSelectors.getLanguage);
	const setLanguage = useCallback((language: string): void => {
		i18n.changeLanguage(language);
		CookiesManager.setLanguage(language);

		dispatch(settingsActions.setLanguage(language));
	}, []);

	useEffect(() => {
		const cachedLanguage = CookiesManager.getLanguage();
		if (!cachedLanguage || !isString(cachedLanguage)) {
			setLanguage(language);

			return;
		}

		setLanguage(cachedLanguage);
	}, []);

	return {
		language,
		setLanguage,
	};
};
