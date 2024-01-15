import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

const viewAnimation = `
	@keyframes opened {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
`;

const ToggleButton = styled.span<{ isOpened: boolean; withIcon: boolean }>(
	(props) => {
		const {
			isOpened,
			withIcon,
			theme: { colors },
		} = props;
		return `
		display: flex;

		align-items: center;
		justify-content: space-between;
		margin: 0;
		padding: 0;
		color: ${colors.text};
		border: none;
		background: transparent;

		${
			withIcon
				? `> svg {
			margin-left: 5px;
			color: ${colors.secondary};
			${isOpened ? 'transform: rotate(180deg);' : ''}
		}`
				: ''
		}
	`;
	},
);

const DropdownButtonWrapper = styled.div<{ isOpened: boolean }>((props) => {
	const { isOpened } = props;

	return `
		display: ${isOpened ? 'block' : 'none'};
		opacity: ${isOpened ? 1 : 0};
		position: fixed;
		top: 0;
		left: 0;
	`;
});

const DropdownButtonContentWrapper = styled.div<{
	isOpened: boolean;
	contentStyle: Required<Pick<CSSProperties, 'top' | 'left'>>;
}>((props) => {
	const {
		isOpened,
		contentStyle,
		theme: { borderRadius, colors },
	} = props;

	return `
		display: ${isOpened ? 'block' : 'none'};
		opacity: ${isOpened ? 1 : 0};
		position: fixed;
		top: ${contentStyle.top}px;
		left: ${contentStyle.left}px;

		margin: 0;
		padding: 12px;
		padding-right: 8px;

		color: ${colors.text};

		border-radius: ${borderRadius}px;

		background-color: ${colors.surface};
		border: 1px solid ${colors.secondary};
		animation: opened 0.3s linear;
		${viewAnimation};
	`;
});

export const Styled = {
	ToggleButton,
	DropdownButtonWrapper,
	DropdownButtonContentWrapper,
};
