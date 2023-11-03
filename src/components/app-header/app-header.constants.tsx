import React from 'react';
import PaymentsIcon from '@assets/icons/layers.inline.svg';
import StatsIcon from '@assets/icons/chart.inline.svg';
import SettingsIcon from '@assets/icons/settings.inline.svg';
import { paths } from '@router/router';

import type { MenuItem } from './app-header.types';

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
	{
		path: paths.settings,
		name: 'settings',
		icon: <SettingsIcon width="16px" height="16px" />,
	},
];

export const pathToTitle: Record<string, string> = {
	payments: 'payments',
	stats: 'stats',
	settings: 'settings',
};
