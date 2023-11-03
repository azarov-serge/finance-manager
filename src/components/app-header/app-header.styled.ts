import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Button } from '@ui-kit/buttons/button/button';
import { Title } from '@ui-kit/typography/title/title';

const Wrapper = styled.div((props) => {
	const {
		theme: { defaultPadding, appHeader },
	} = props;

	return `
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: ${appHeader.height}px;
		padding: ${defaultPadding};
		padding-top: 10px;
		padding-bottom: 10px;
		background: ${appHeader.background};
	`;
});

const TitleWrapper = styled.div(() => {
	return `
		display: flex;
		align-items: center;
		width: 100%;
	`;
});

const HeaderTitle = styled(Title)`
	margin-left: 6px;
`;

const ControlsWrapper = styled.div(() => {
	return `
		display: flex;
		justify-content: space-between;
		align-items: center;

	`;
});

const BurgerMenuButton = styled(Button)<{ isMenuOpenend: boolean }>`
	${(props) => {
		const {
			isMenuOpenend,
			theme: { colors, size },
		} = props;

		return `
			z-index: 9999999;
			color: ${isMenuOpenend ? colors.primary : colors.secondary};
			${isMenuOpenend ? `border-color: ${colors.primary};` : ''};

			@media (min-width: ${size.desktopWidth}px) {
				display: none;
			}
		`;
	}}
`;

const MenuWrapper = styled.div<{ isMenuOpenend: boolean }>((props) => {
	const {
		isMenuOpenend,
		theme: { defaultPadding, colors, appHeader, size },
	} = props;

	return `
		position: absolute;
		top: 0;
		right: 0;
		display: ${isMenuOpenend ? 'flex' : 'none'};
		flex-direction: column;
		justify-content: space-between;
		width: ${appHeader.menuHeight}px;
		height: 100vh;
		margin: 0;
		padding: ${defaultPadding};
		padding-top: ${appHeader.height}px;
		padding-bottom: 20px;
		background: ${appHeader.background};
		box-shadow: -5px 1px 8px 0px ${colors.background};

		@media (min-width: ${size.desktopWidth}px) {
			top: ${appHeader.height}px;
			left: 0;
			display: flex;
			height: calc(100vh - ${appHeader.height}px);
			background: ${colors.background};
			box-shadow: none;
		}
	`;
});

const Menu = styled.ul<{ mt?: string; height?: string }>((props) => {
	const {
		height,
		mt,
		theme: { appHeader },
	} = props;

	return `
		height: ${height !== undefined ? height : appHeader.menuHeight}px;
		margin: 0;
		padding: 0;
	
		list-style: none;
		${mt ? `margin-top: ${mt};` : ''}
`;
});

const MenuItem = styled.li<{
	isActive?: boolean;
	align?: 'start' | 'space-between';
}>((props) => {
	const {
		isActive,
		align = 'start',
		theme: { colors },
	} = props;

	return `
		display: flex;
		justify-content: ${align};
		align-items: center;

		min-width: 80px;

		margin: 10px 0;
		padding: 5px 0;

		${isActive ? `color: ${colors.accent}` : `color: ${colors.primary}`};

		> a {
			${isActive ? `color: ${colors.accent}` : `color: ${colors.primary}`};
		}
	`;
});

const MenuLink = styled(Link)`
	display: flex;
	align-items: center;

	> span {
		margin-left: 4px;
	}
`;

export const Styled = {
	Wrapper,
	TitleWrapper,
	HeaderTitle,
	ControlsWrapper,
	BurgerMenuButton,
	MenuWrapper,
	Menu,
	MenuItem,
	MenuLink,
};
