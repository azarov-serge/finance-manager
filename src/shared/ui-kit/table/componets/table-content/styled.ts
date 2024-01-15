import styled from '@emotion/styled';
import { type TdProps } from './types';

const Td = styled.td<TdProps>((props) => {
	const {
		width,
		minWidth,
		maxWidth,
		justifyContent,
		alignItems,
		theme: { colors },
	} = props;

	return `
        display: flex;
		justify-content: ${justifyContent ? `${justifyContent}` : ''};
		align-items: ${alignItems ? `${alignItems}` : ''};

		width: ${width && !minWidth && !maxWidth ? `${width}px` : '100%'};
		max-width: ${minWidth ? `${minWidth}px` : ''};
		max-width: ${maxWidth ? `${maxWidth}px` : ''};


		padding: 5px 10px;
		border: 1px solid ${colors.border};

    `;
});

export const Styled = {
	Td,
};
