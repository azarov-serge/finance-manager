import styled from '@emotion/styled';

const Wrapper = styled.div<{ isAuth: boolean }>((props) => {
	const {
		isAuth,
		theme: { defaultPadding, appHeader, appFooter, size },
	} = props;

	return `
		width: 100%;
		height: calc(100vh - ${appHeader.height}px - ${appFooter.height}px - 10px);
		margin-top: 10px;
		padding: ${defaultPadding};

		@media (min-width: ${size.desktopWidth}px) {
			${isAuth ? `width: calc(100% - ${appHeader.menuHeight}px);` : ''}
			${isAuth ? `margin-left: ${appHeader.menuHeight}px;` : ''}
		}
	`;
});

export const Styled = {
	Wrapper,
};
