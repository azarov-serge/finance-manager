import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks';
import { userActions, userSelectors } from '@store';
import { CookiesManager } from '@utils/cookies-manager';
import { type UserEntity } from '@entities';

export const useUser = (): {
	user: UserEntity | null;
	setUser: (user: UserEntity | null) => void;
} => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(userSelectors.getUser);

	const setUser = useCallback((user: UserEntity | null): void => {
		CookiesManager.setUser(user);

		dispatch(userActions.setUser(user));
	}, []);

	useEffect(() => {
		const cachedUser = CookiesManager.getUser();
		if (cachedUser && user === null) {
			setUser(cachedUser);
		}
	}, []);

	return {
		user,
		setUser,
	};
};
