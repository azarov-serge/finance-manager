import React from 'react';

import { Styled } from './styled';
import type { TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
	const { children, ...rest } = props;

	return <Styled.Text {...rest}>{children}</Styled.Text>;
};
