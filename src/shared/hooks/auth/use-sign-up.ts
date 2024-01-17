import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser, useIsAuth } from '@hooks';
import { authApi } from '@store';
import { getError, CookiesManager, SessionStorageManager } from '@utils';

export const useSignUp = (): {
	isLoading: boolean;
	error: string;
	signUp: (data: { login: string; password: string }) => Promise<void>;
} => {
	const [signUp, { isLoading, data, error }] = authApi.useSignUpMutation();
	const { setUser } = useUser();
	const { setIsAuth } = useIsAuth();

	const navigate = useNavigate();

	useEffect(() => {
		if (!data?.tokens.accessToken || !data?.tokens || !data?.user) {
			return;
		}

		// сохраняем новые tokens
		SessionStorageManager.setAccessToken(data.tokens.accessToken || '');
		CookiesManager.setRefreshToken(data.tokens.refreshToken || '');

		setUser(data.user);

		setIsAuth(true);
		navigate('/');
	}, [data]);

	const handleSignUp = useCallback(
		async (data: { login: string; password: string }): Promise<void> => {
			await signUp(data);
		},
		[],
	);

	return {
		isLoading,
		signUp: handleSignUp,
		error: getError(error),
	};
};
