import React from 'react';

import { Styled } from './styled';
import type { TitleProps } from './types';

export const Title: React.FC<TitleProps> = (props) => {
	const {
		symantic,
		level = 2,
		align = 'left',
		mb,
		className,
		children,
	} = props;
	const Tag =
		Styled[`${symantic ? `H${level}` : `Title${level}`}`] || Styled.Title2;

	return (
		<Tag className={className} align={align} mb={mb}>
			{children}
		</Tag>
	);
};
