import styled from '@emotion/styled';

const Wrapper = styled.div((props) => {
	const {
		theme: { defaultPadding, appFooter },
	} = props;

	return `
		padding: ${defaultPadding};
		padding-top: 10px;
		padding-bottom: 10px;
		height: ${appFooter.height}px;
		text-align: center;
	`;
});

export const Styled = {
	Wrapper,
};
