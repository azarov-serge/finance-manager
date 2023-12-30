import React from 'react';

import { Styled } from './styled';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (props) => {
	const { children, ...rest } = props;

	return <Styled.Button {...rest}>{children}</Styled.Button>;
};
