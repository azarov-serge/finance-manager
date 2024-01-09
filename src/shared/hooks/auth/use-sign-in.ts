import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser, useIsAuth } from '@hooks';
import { authApi } from '@store';
import { getError, CookiesManager } from '@utils';

export const useSignIn = (): {
	isLoading: boolean;
	error: string;
	signIn: (data: { login: string; password: string }) => Promise<void>;
} => {
	const [signIn, { isLoading, data, error }] = authApi.useSignInMutation();
	const { setUser } = useUser();
	const { setIsAuth } = useIsAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (!data?.tokens.accessToken || !data?.tokens || !data?.user) {
			return;
		}

		// сохраняем новые tokens в cookies
		CookiesManager.setAccessToken(data.tokens.accessToken || '');
		CookiesManager.setRefreshToken(data.tokens.refreshToken || '');

		setUser(data.user);

		setIsAuth(true);
		navigate('/');
	}, [data]);

	const handleSignIn = useCallback(
		async (data: { login: string; password: string }): Promise<void> => {
			await signIn(data);
		},
		[],
	);

	return {
		isLoading,
		signIn: handleSignIn,
		error: getError(error),
	};
};
