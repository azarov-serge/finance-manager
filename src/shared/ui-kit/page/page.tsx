import React from 'react';
import type { PropsWithChildren } from 'react';

import { Styled } from './page.styled';

export const Page: React.FC<PropsWithChildren> = (props) => {
	return <Styled.Wrapper>{props.children}</Styled.Wrapper>;
};
