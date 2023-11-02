import React, { createContext } from 'react';
import { ThemeProvider } from '@emotion/react';

import { DEFAULT_THEME_NAME, themes } from '../themes';
import { GlobalStyle } from '../styles/global.style';

import type {
	UiKitContextProps,
	UiKitProviderProps,
} from './ui-kit.provider.types';

const UiKitContext = createContext<UiKitContextProps>({
	theme: themes[DEFAULT_THEME_NAME],
});

export const UiKitProvider = (props: UiKitProviderProps): JSX.Element => {
	const { theme, children } = props;

	return (
		<UiKitContext.Provider value={{ theme }}>
			<ThemeProvider theme={theme}>
				{children}
				<GlobalStyle />
			</ThemeProvider>
		</UiKitContext.Provider>
	);
};
