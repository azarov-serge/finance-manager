import React from 'react';
import { useTranslation } from 'react-i18next';

import { UiKitProvider } from '@ui-kit/providers/ui-kit-provider';
import { Title } from '@ui-kit/typography/title/title';

import { AppFooter } from './componets/app-footer/app-footer';
import { AppHeader } from './componets/app-header/app-header';
import { AppContent } from './componets/app-content/app-content';
import { useTheme } from './hooks/use-theme';
import { Page } from '@ui-kit/page/page';

export const App: React.FC = () => {
	const { theme, themeName, handleThemeClick } = useTheme();

	const { t } = useTranslation();

	return (
		<UiKitProvider theme={theme}>
			<AppHeader themeName={themeName} onThemeClick={handleThemeClick} />
			<AppContent>
				<Page>
					<Title symantic align="center" mb={100}>
						{t('financeManager')}
					</Title>
				</Page>
			</AppContent>
			<AppFooter />
		</UiKitProvider>
	);
};
