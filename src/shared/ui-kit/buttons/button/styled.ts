import styled from '@emotion/styled';

import type { StyledButtonProps } from './types';

const Button = styled.button<StyledButtonProps>((props) => {
	const {
		kind = 'secondary',
		mb,
		wide,
		theme: { colors, button },
	} = props;

	const isGhhost = kind === 'ghost';
	const background = kind === 'ghost' ? 'transparent' : button[kind];

	return `
		border: 1px solid ${isGhhost ? colors.secondary : background};

		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;

		color: ${colors.text};
		background: ${background};
		${mb ? `margin-bottom: ${mb}px;` : ''}

		cursor: pointer;
		transition: 0.3s;

		${wide ? `width: 100%;` : ''}
	`;
});

export const Styled = {
	Button,
};
