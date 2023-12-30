import styled from '@emotion/styled';
import type { TextProps } from './types';

const sizeToStyle = {
	small: `
		font-size: 10px;
		line-height: 10px;
	`,
	medium: `
		font-size: 12px;
		line-height: 12px;
	`,
};

const Text = styled.span<TextProps>((props) => {
	const { theme, align, mb, kind, size = 'medium' } = props;

	const color =
		!kind || kind === 'normal' ? theme.colors.text : theme.colors[kind];

	const sizeStyle = sizeToStyle[size];

	return `
		font-family: ${theme.typography.text.fontFamily};

		color: ${color};

		text-align: ${align};
		${sizeStyle};
		${mb ? `margin-bottom: ${mb}px;` : ''}
	`;
});

export const Styled = { Text };
