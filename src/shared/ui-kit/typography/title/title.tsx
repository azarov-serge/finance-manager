import React from 'react';

import { Styled } from './title.styled';
import type { TitleProps } from './title.types';

export const Title: React.FC<TitleProps> = (props) => {
	const { symantic, level = 2, align = 'left', mb, children } = props;
	const Tag =
		Styled[`${symantic ? `H${level}` : `Title${level}`}`] || Styled.Title2;

	return (
		<Tag align={align} mb={mb}>
			{children}
		</Tag>
	);
};
