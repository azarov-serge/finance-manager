import styled from '@emotion/styled';
import type { CommonStyledProps } from './types';

const H1 = styled.h1<CommonStyledProps>((props) => {
	const { align, mb } = props;

	return `
        text-align: ${align};
        ${mb ? `margin-bottom: ${mb}px;` : ''}
    `;
});

const H2 = styled.h2<CommonStyledProps>((props) => {
	const { align, mb } = props;

	return `
        text-align: ${align};
        ${mb ? `margin-bottom: ${mb}px;` : ''}
    `;
});

const H3 = styled.h3<CommonStyledProps>((props) => {
	const { align, mb } = props;

	return `
        text-align: ${align};
        ${mb ? `margin-bottom: ${mb}px;` : ''}
    `;
});

const H4 = styled.h4<CommonStyledProps>((props) => {
	const { align, mb } = props;

	return `
        text-align: ${align};
        ${mb ? `margin-bottom: ${mb}px;` : ''}
    `;
});

const H5 = styled.h5<CommonStyledProps>((props) => {
	const { align, mb } = props;

	return `
        text-align: ${align};
        ${mb ? `margin-bottom: ${mb}px;` : ''}
    `;
});

const Title1 = styled.p<CommonStyledProps>((props) => {
	const { theme, align, mb } = props;

	return `
		font-family: ${theme.typography.title1.fontFamily};
		font-size: ${theme.typography.title1.fontSize};
		font-weight: 700;
		color: ${theme.typography.title1.color};

		text-align: ${align};
		${mb ? `margin-bottom: ${mb}px;` : ''}
	`;
});

const Title2 = styled.p<CommonStyledProps>((props) => {
	const { theme, align, mb } = props;

	return `
		font-family: ${theme.typography.title2.fontFamily};
		font-size: ${theme.typography.title2.fontSize};
		font-weight: 700;
		color: ${theme.typography.title2.color};

		text-align: ${align};
		${mb ? `margin-bottom: ${mb}px;` : ''}
	`;
});

const Title3 = styled.p<CommonStyledProps>((props) => {
	const { theme, align, mb } = props;

	return `
		font-family: ${theme.typography.title3.fontFamily};
		font-size: ${theme.typography.title3.fontSize};
		font-weight: 700;
		color: ${theme.typography.title3.color};

		text-align: ${align};
		${mb ? `margin-bottom: ${mb}px;` : ''}
	`;
});

const Title4 = styled.p<CommonStyledProps>((props) => {
	const { theme, align, mb } = props;

	return `
		font-family: ${theme.typography.title4.fontFamily};
		font-size: ${theme.typography.title4.fontSize};
		font-weight: 700;
		color: ${theme.typography.title4.color};

		text-align: ${align};
		${mb ? `margin-bottom: ${mb}px;` : ''}
	`;
});

const Title5 = styled.p<CommonStyledProps>((props) => {
	const { theme, align, mb } = props;

	return `
		font-family: ${theme.typography.title5.fontFamily};
		font-size: ${theme.typography.title5.fontSize};
		font-weight: 700;
		color: ${theme.typography.title5.color};

		text-align: ${align};
		${mb ? `margin-bottom: ${mb}px;` : ''}
	`;
});

export const Styled: Record<string, typeof H1> = {
	H1,
	H2,
	H3,
	H4,
	H5,
	Title1,
	Title2,
	Title3,
	Title4,
	Title5,
};
