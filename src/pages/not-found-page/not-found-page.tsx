import React from 'react';
import notFoundUrl from '@assets/img/404.png';
import { Styled } from './not-found-page.styled';
import { Title } from '@ui-kit/typography/title/title';

export const NotFoundPage: React.FC = () => {
	return (
		<Styled.NotFoundPage>
			<Title>Page not found</Title>
			<Styled.Img src={notFoundUrl} />
		</Styled.NotFoundPage>
	);
};
