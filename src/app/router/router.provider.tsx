import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { paths, router, routes } from './router';

export const RouterProvider: React.FC = () => {
	return (
		<Routes>
			{router.map((route) => {
				return (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				);
			})}

			<Route path="*" element={routes[paths.notFound].element} />
		</Routes>
	);
};
