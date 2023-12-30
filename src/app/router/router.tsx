import React from 'react';

import { PaymentsPage } from '@pages/payments-page/payments-page';
import { StatsPage } from '@pages/stats-page/stats-page';
import { NotFoundPage } from '@pages/not-found-page/not-found-page';
import { SignInPage } from '@pages/sign-in-page/sign-in-page';
import { SignUpPage } from '@pages/sign-up-page/sign-up-page';

export const paths = {
	home: '/',
	payments: '/',
	stats: '/stats',
};

export const authPaths = {
	signIn: '/sign-in',
	signUp: '/sign-up',
};

export const commonPaths = {
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
};

export const authRoutes = {
	[authPaths.signIn]: {
		path: authPaths.signIn,
		element: <SignInPage />,
	},
	[authPaths.signUp]: {
		path: authPaths.signUp,
		element: <SignUpPage />,
	},
};

export const commonRoutes = {
	[commonPaths.notFound]: {
		path: commonPaths.notFound,
		element: <NotFoundPage />,
	},
};

export const router = Object.values(routes);
export const authRouter = Object.values(authRoutes);
export const commonRouter = Object.values(commonRoutes);
