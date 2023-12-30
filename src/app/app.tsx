import React from 'react';
import { observer } from 'mobx-react';

import { UiKitProvider } from '@ui-kit/providers/ui-kit-provider';
import { AppFooter } from '@components/app-footer/app-footer';
import { AppHeader } from '@components/app-header/app-header';
import { AppContent } from '@components/app-content/app-content';

import { useTheme } from './hooks/use-theme';
import { useApp } from './hooks/use-app';
import { RouterProvider } from './router/router-provider';

export const App: React.FC = observer(() => {
	const { theme } = useTheme();
	const { isAuth } = useApp();

	return (
		<UiKitProvider theme={theme}>
			{isAuth === null ? null : (
				<>
					<AppHeader isAuth={isAuth} />
					<AppContent isAuth={isAuth}>
						<RouterProvider />
					</AppContent>
					<AppFooter />
				</>
			)}
		</UiKitProvider>
	);
});
