import React from 'react';
import { Styled } from './app-footer.styled';
import { useAppFooter } from './hooks/use-app-footer';

export const AppFooter: React.FC = () => {
	const { year } = useAppFooter();

	return <Styled.Wrapper>{`©${year}`}</Styled.Wrapper>;
};
