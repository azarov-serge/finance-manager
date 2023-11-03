import React from 'react';
import PaymentsIcon from '@assets/layers.inline.svg';
import StatsIcon from '@assets/chart.inline.svg';
import SettingsIcon from '@assets/settings.inline.svg';

import type { MenuItem } from './app-header.types';

export const menuItems: MenuItem[] = [
	{
		path: '/',
		name: 'payments',
		icon: <PaymentsIcon width="16px" height="16px" />,
	},
	{
		path: '/stats',
		name: 'stats',
		icon: <StatsIcon width="16px" height="16px" />,
	},
	{
		path: '/settings',
		name: 'settings',
		icon: <SettingsIcon width="16px" height="16px" />,
	},
];
