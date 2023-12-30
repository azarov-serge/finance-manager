import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react';

import { commonRoutes, commonPaths, router, authRouter } from './router';
import { PrivateRoute } from './private-route';

export const RouterProvider: React.FC = observer(() => {
	return (
		<Routes>
			{authRouter.map((route) => {
				return (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				);
			})}

			<Route path="/" element={<PrivateRoute />}>
				{router.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						/>
					);
				})}
			</Route>
			<Route
				path="*"
				element={commonRoutes[commonPaths.notFound].element}
			/>
		</Routes>
	);
});
