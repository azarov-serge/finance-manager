import React, { type PropsWithChildren } from 'react';

import { Styled } from './styled';

export const AppContent: React.FC<PropsWithChildren<{ isAuth: boolean }>> = (
	props,
) => {
	return (
		<Styled.Wrapper isAuth={props.isAuth}>{props.children}</Styled.Wrapper>
	);
};
