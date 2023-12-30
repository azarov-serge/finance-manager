import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import { store } from '@store';

export const PrivateRoute: React.FC = observer(() => {
	const { authStore } = store;

	if (authStore.isAuth) {
		return <Outlet />;
	}

	return <Navigate to="/sign-in" />;
});
