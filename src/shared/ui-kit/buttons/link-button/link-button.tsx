import React from 'react';

import { Styled } from './styled';
import type { LinkButtonProps } from './types';

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
	const { children, ...rest } = props;

	return <Styled.LinkButton {...rest}>{children}</Styled.LinkButton>;
};
