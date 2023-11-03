import React from 'react';
import type { PropsWithChildren } from 'react';
import { Styled } from './app-content.styled';

export const AppContent: React.FC<PropsWithChildren> = (props) => {
	return <Styled.Wrapper>{props.children}</Styled.Wrapper>;
};
