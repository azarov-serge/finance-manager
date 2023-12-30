import React from 'react';
import PaymentsIcon from '@assets/icons/layers.inline.svg';
import StatsIcon from '@assets/icons/chart.inline.svg';
import { paths } from '@router/router';

import type { MenuItem } from './types';

export const menuItems: MenuItem[] = [
	{
		path: paths.payments,
		name: 'payments',
		icon: <PaymentsIcon width="16px" height="16px" />,
	},
	{
		path: paths.stats,
		name: 'stats',
		icon: <StatsIcon width="16px" height="16px" />,
	},
];

export const pathToTitle: Record<string, string> = {
	home: 'payments',
	payments: 'payments',
	stats: 'stats',
	settings: 'settings',
	'sign-in': '',
	'sign-up': '',
};
