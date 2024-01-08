import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsAuth } from '@hooks';

export const PrivateRoute: React.FC = () => {
	const { isAuth } = useIsAuth();

	if (isAuth) {
		return <Outlet />;
	}

	return <Navigate to="/sign-in" />;
};
