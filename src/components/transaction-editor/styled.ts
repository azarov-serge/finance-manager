import styled from '@emotion/styled';

const Form = styled.form((props) => {
	const {
		theme: { size, colors, borderRadius },
	} = props;

	return `
        width: 100%;

		margin-bottom: 10px;
		padding: 20px 30px;

        background: ${colors.surface};
        border-radius: ${borderRadius}px;
		
		text-align: center;

		input {
			width: 100%;
			margin-bottom: 10px;
		}

		button {
			width: 100%;
			margin-top: 10px;
		}

		.logo-wrapper  {
			fill: ${colors.text} !important;
		}

		.logo-text {
			fill: ${colors.background} !important;
		}

        @media (min-width: ${size.desktopWidth}px) {
            width: 300px;
        }
`;
});

const Row = styled.div`
	height: 55px;
	text-align: left;

	> select {
		width: 100%;
	}
`;

export const Styled = {
	Form,
	Row,
};
