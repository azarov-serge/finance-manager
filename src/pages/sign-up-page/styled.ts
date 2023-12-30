import styled from '@emotion/styled';
import signInImg from '@assets/img/robot-hello.img.svg';

const Page = styled.div(() => {
	return `
        height: 100%;
        background-image: url(${signInImg});
        background-size: 20% auto;
        background-repeat: no-repeat;
        background-position:  center left 20%;
`;
});

const Form = styled.form((props) => {
	const {
		theme: { size, colors, borderRadius },
	} = props;

	return `
        width: 100%;
        background: ${colors.surface};
        border-radius: ${borderRadius}px;

        @media (min-width: ${size.desktopWidth}px) {
            width: 50%;

            margin-left: auto;
        }
`;
});

export const Styled = {
	Page,
	Form,
};
