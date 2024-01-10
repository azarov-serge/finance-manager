import styled from '@emotion/styled';

import type { StyledButtonProps } from './types';

const Button = styled.button<StyledButtonProps>((props) => {
	const {
		kind = 'secondary',
		mb,
		wide,
		theme: { colors, button },
	} = props;

	const color = kind === 'ghost' ? 'transparent' : button[kind];

	const styles: Record<
		Exclude<StyledButtonProps['kind'], undefined>,
		string
	> = {
		primary: `
			background: ${color};
			border-color: ${color};
		`,
		secondary: `
			background: ${color};
			border-color: ${colors.border};
		`,
		ghost: `
			background: transparent;
			border-color: transparent;
		`,
		danger: `
			background: transparent;
			border-color: ${color};
			color: ${color};
		`,
	};

	return `
		border: 1px solid ${colors.border};
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;

		color: ${colors.text};
		${mb ? `margin-bottom: ${mb}px;` : ''}

		cursor: pointer;
		transition: 0.3s;
		${styles[kind]}

		${wide ? `width: 100%;` : ''}
	`;
});

export const Styled = {
	Button,
};
