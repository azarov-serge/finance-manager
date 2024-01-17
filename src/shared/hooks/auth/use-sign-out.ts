import { useCallback } from 'react';

import { useUser, useIsAuth } from '@hooks';
import { authApi } from '@store';
import { getError, CookiesManager, SessionStorageManager } from '@utils';

export const useSignOut = (): {
	isLoading: boolean;
	error: string;
	signOut: () => Promise<void>;
} => {
	const [signOut, { isLoading, error }] = authApi.useSignOutMutation();
	const { user } = useUser();
	const { setUser } = useUser();
	const { setIsAuth } = useIsAuth();

	const handleSignOut = useCallback(async (): Promise<void> => {
		CookiesManager.deleteRefreshToken();

		await signOut({ userId: user?.id || '' });

		SessionStorageManager.setAccessToken('');
		CookiesManager.deleteRefreshToken();
		setIsAuth(false);
		setUser(null);
	}, []);

	return {
		isLoading,
		signOut: handleSignOut,
		error: getError(error),
	};
};
