import styled from '@emotion/styled';
import signInImg from '@assets/img/robot-hello.img.svg';

const Page = styled.div(() => {
	return `
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
        height: 100%;

		background-image: url(${signInImg});
        background-size: 20% auto;
        background-repeat: no-repeat;
        background-position:  center left 25%;
`;
});

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

            margin-left: 25%;
        }
`;
});

const Row = styled.div`
	height: 55px;
	text-align: left;
`;

export const Styled = {
	Page,
	Form,
	Row,
};
