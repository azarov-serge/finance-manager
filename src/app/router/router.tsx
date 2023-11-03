import React from 'react';

import { PaymentsPage } from '@pages/payments-page/payments-page';
import { StatsPage } from '@pages/stats-page/stats-page';
import { SettingsPage } from '@pages/settings-page/settings-page';
import { NotFoundPage } from '@pages/not-found-page/not-found-page';

export const paths = {
	home: '/',
	payments: '/',
	stats: '/stats',
	settings: '/settings',
	notFound: '/not-found',
};

export const routes = {
	[paths.home]: {
		path: paths.home,
		element: <PaymentsPage />,
	},
	[paths.payments]: {
		path: paths.payments,
		element: <PaymentsPage />,
	},

	[paths.stats]: {
		path: paths.stats,
		element: <StatsPage />,
	},
	[paths.settings]: {
		path: paths.settings,
		element: <SettingsPage />,
	},
	[paths.notFound]: {
		path: paths.notFound,
		element: <NotFoundPage />,
	},
};

export const router = Object.values(routes);
