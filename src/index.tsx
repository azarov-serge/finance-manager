import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { Provider as MOBXProvider } from 'mobx-react';

import { App } from './app/app';
import { store } from './app/store';

import './shared/languages/i18n';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
	<BrowserRouter>
		<MOBXProvider {...store}>
			<App />
		</MOBXProvider>
		,
	</BrowserRouter>,
);
