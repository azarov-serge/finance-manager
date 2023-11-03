import styled from '@emotion/styled';
import { Page } from '@ui-kit/page/page';

const NotFoundPage = styled(Page)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Img = styled.img((props) => {
	const {
		theme: { size },
	} = props;

	return `
        width: 70%;
        height: auto;
        text-align: center;

        @media (min-width: ${size.desktopWidth}px) {
            width: auto;
            height: 70%;

        }
`;
});

export const Styled = {
	Img,
	NotFoundPage,
};
