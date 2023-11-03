import styled from '@emotion/styled';

const Wrapper = styled.div((props) => {
	const {
		theme: { defaultPadding, appHeader, appFooter, size },
	} = props;

	return `
		width: 100%;
		height: calc(100vh - ${appHeader.height}px - ${appFooter.height}px - 25px);
		margin-top: 10px;
		margin-bottom: 15px;
		padding: ${defaultPadding};

		@media (min-width: ${size.desktopWidth}px) {
			width: calc(100% - ${appHeader.menuHeight}px);
			margin-left: ${appHeader.menuHeight}px;
		}
	`;
});

export const Styled = {
	Wrapper,
};
