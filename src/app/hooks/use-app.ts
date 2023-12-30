import { useEffect } from 'react';
import { authStore } from '@store/views';
import { useLocation, useNavigate } from 'react-router-dom';

export const useApp = (): { isAuth: boolean | null } => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		authStore.checkAuth();
	}, []);

	useEffect(() => {
		if (location.pathname.includes('/sign-') && authStore.isAuth) {
			navigate('/');
		}
	}, [authStore.isAuth]);

	return {
		isAuth: authStore.isAuth,
	};
};
