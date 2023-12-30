import React from 'react';

import notFoundUrl from '@assets/img/404.png';
import { Title } from '@ui-kit/typography/title/title';

import { Styled } from './styled';

export const NotFoundPage: React.FC = () => {
	return (
		<Styled.NotFoundPage>
			<Title>Page not found</Title>
			<Styled.Img src={notFoundUrl} />
		</Styled.NotFoundPage>
	);
};
