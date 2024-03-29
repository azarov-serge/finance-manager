import { useEffect } from 'react';

import { useIsAuth, useUser } from '@hooks';
import { authApi } from '@store';
import { CookiesManager, SessionStorageManager } from '@utils';

export const useRefreshToken = (): void => {
	const { isAuth, setIsAuth } = useIsAuth();
	const { user } = useUser();

	const { data, isError } = authApi.useRefreshTokenQuery({
		userId: user?.id || '',
	});

	useEffect(() => {
		if (isError) {
			setIsAuth(false);

			return;
		}

		if (!data?.tokens.accessToken || !data?.tokens) {
			return;
		}

		// сохраняем новые token в cookies
		SessionStorageManager.setAccessToken(data?.tokens.accessToken || '');
		CookiesManager.setRefreshToken(data?.tokens.refreshToken || '');

		if (isAuth === null) {
			setIsAuth(true);
		}
	}, [data, isError]);
};
