import styled from '@emotion/styled';

import type { StyledLinkButtonProps } from './types';

const LinkButton = styled.a<StyledLinkButtonProps>((props) => {
	const {
		kind = 'secondary',
		mb,
		wide,
		theme: { colors, button, borderRadius },
	} = props;

	const isGhhost = kind === 'ghost';
	const background = kind === 'ghost' ? 'transparent' : button[kind];

	return `
		border: 1px solid ${isGhhost ? colors.secondary : background};

		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		padding: 4px 8px;
		
		border-radius: ${borderRadius}px;
		color: ${colors.text};
		cursor: pointer;
		background: ${background};
		${mb ? `margin-bottom: ${mb}px;` : ''}

		cursor: pointer;
		transition: 0.3s;

		${wide ? `width: 100%;` : ''}
	`;
});

export const Styled = {
	LinkButton,
};
