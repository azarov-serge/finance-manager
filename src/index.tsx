import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { App } from './app/app';
import { store } from './app/store';
import ErrorBoundary from './components/error-boundary/error-boundary';

import './shared/languages/i18n';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
	<ErrorBoundary>
		<BrowserRouter>
			<ReduxProvider store={store}>
				<App />
			</ReduxProvider>
		</BrowserRouter>
	</ErrorBoundary>,
);
