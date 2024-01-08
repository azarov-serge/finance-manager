import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useIsAuth, useRefreshToken } from '@hooks';

export const useApp = (): { isAuth: boolean | null } => {
	const location = useLocation();
	const navigate = useNavigate();
	const { isAuth } = useIsAuth();

	useRefreshToken();

	useEffect(() => {
		if (isAuth && location.pathname.includes('/sign-')) {
			navigate('/');
		}
	}, [isAuth]);

	return {
		isAuth,
	};
};
