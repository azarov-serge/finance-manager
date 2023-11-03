import React from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Styled } from './page.styled';

export const Page: React.FC<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
	return (
		<Styled.Wrapper className={props.className}>
			{props.children}
		</Styled.Wrapper>
	);
};
