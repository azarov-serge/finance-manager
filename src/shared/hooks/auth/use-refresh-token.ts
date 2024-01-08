import { useEffect } from 'react';

import { useIsAuth, useUser } from '@hooks';
import { authApi } from '@store';
import { CookiesManager } from '@utils/cookies-manager';

export const useRefreshToken = (): void => {
	const { isAuth, setIsAuth } = useIsAuth();
	const { user, setUser } = useUser();

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

		// сохраняем новые tokens в cookies
		CookiesManager.setAccessToken(data?.tokens.accessToken || '');
		CookiesManager.setRefreshToken(data?.tokens.refreshToken || '');

		if (isAuth === null) {
			setUser(user);
			setIsAuth(true);
		}
	}, [data, isError]);
};
