import React from 'react';
import { Styled } from './button.styled';
import type { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = (props) => {
	const { children, ...rest } = props;

	return <Styled.Button {...rest}>{children}</Styled.Button>;
};
