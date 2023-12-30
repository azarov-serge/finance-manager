import React from 'react';

import pckg from '../../../package.json';
import { useAppFooter } from './hooks/use-app-footer';
import { Styled } from './styled';

export const AppFooter: React.FC = () => {
	const { year } = useAppFooter();

	return (
		<Styled.Wrapper>{`Finance Manager v${pckg.version} © ${year}`}</Styled.Wrapper>
	);
};
