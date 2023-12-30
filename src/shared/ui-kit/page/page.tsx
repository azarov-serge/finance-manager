import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import { Styled } from './styled';

export const Page: React.FC<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
	return (
		<Styled.Wrapper className={props.className}>
			{props.children}
		</Styled.Wrapper>
	);
};
