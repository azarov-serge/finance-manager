import styled from '@emotion/styled';

import { type ThProps } from './types';

const Th = styled.th<ThProps>((props) => {
	const {
		width,
		minWidth,
		maxWidth,
		theme: { colors },
	} = props;

	return `
        display: flex;
		align-items: center;

		width: ${width && !minWidth && !maxWidth ? `${width}px` : '100%'};
		min-width: ${minWidth ? `${minWidth}px` : ''};
		max-width: ${maxWidth ? `${maxWidth}px` : ''};

		padding: 5px 10px;
		background: ${colors.selected};
		border: 1px solid ${colors.border};

    `;
});

const HeaderTitle = styled.button<{ sortable: boolean }>((props) => {
	const {
		sortable,
		theme: { colors },
	} = props;

	return `
	display: block;
	width: 100%;

	margin: 0;
	padding: 0;

	text-align: left;
	border: none;
	background: transparent;
	color: ${colors.text};
	
	cursor: ${sortable ? 'pointer' : 'default'};
`;
});

const SortWrapper = styled.span((props) => {
	return `
		margin-left: auto;
		padding: 0;
`;
});

export const Styled = {
	Th,
	HeaderTitle,
	SortWrapper,
};
