import { useAppDispatch, useAppSelector } from '@hooks';
import { userActions, userSelectors } from '@store';

export const useIsAuth = (): {
	isAuth: boolean | null;
	setIsAuth: (isAuth: boolean) => void;
} => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(userSelectors.getIsAuth);

	const setIsAuth = (isAuth: boolean): void => {
		dispatch(userActions.setIsAuth(isAuth));
	};

	return {
		isAuth,
		setIsAuth,
	};
};
