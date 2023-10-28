import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { delay } from '@utils/mock';

export const Wrapper = styled.div`
	font-family: Arial;
	color: white;
	background: black;
`;

export const App: React.FC = () => {
	useEffect(() => {
		const init = async (): Promise<void> => {
			console.log('Start app');

			await delay(300);

			console.log('Inited app');
		};

		void init();
	}, []);

	const { t } = useTranslation();
	return <Wrapper>{t('financeManager')}</Wrapper>;
};
