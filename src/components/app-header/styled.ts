import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Button } from '@ui-kit/buttons/button/button';
import { Title } from '@ui-kit/typography/title/title';

import { DropdownButton } from '@ui-kit/buttons/drop-down-button/dropdown-button';

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
	width: 100%;
	margin-left: 6px;
	text-align: center;
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
			padding-right: 10px;

			background-color: ${appHeader.background};
			box-shadow: -5px 1px 8px 0px ${colors.background};

			@media (min-width: ${size.desktopWidth}px) {
				top: ${appHeader.height}px;
				left: 0;
				display: flex;
				height: calc(100vh - ${appHeader.height}px);
				padding-right: 0;

				background-color: ${colors.background};

				box-shadow: none;

			}
	`;
});

const Menu = styled.ul<{ mt?: string; height?: string; isTop?: boolean }>(
	(props) => {
		const {
			height,
			mt,
			isTop,
			theme: { appHeader, size },
		} = props;

		let topStyle = '';

		if (isTop) {
			topStyle = `
				position: fixed;
				top: -5px;
				right: 20px;
				display: flex;
			`;
		}

		return `
			height: ${height !== undefined ? height : `${appHeader.menuHeight}px`};
			margin: 0;
			padding: 0;
		
			list-style: none;
			${mt ? `margin-top: ${mt};` : ''}

			@media (min-width: ${size.desktopWidth}px) {
				${topStyle}
			}	
`;
	},
);

const MenuItem = styled.li<{
	isActive?: boolean;
	align?: 'start' | 'space-between';
	width?: string;
	isTop?: boolean;
}>((props) => {
	const {
		isActive,
		align = 'start',
		isTop,
		theme: { colors, size },
		width,
	} = props;

	let topStyle = '';

	if (isTop) {
		topStyle = `
			margin-right: 10px;
		`;
	}

	return `
		display: flex;
		justify-content: ${align};
		align-items: center;

		width: ${width === undefined ? 'auto' : width};
		min-width: 80px;

		margin: 10px 0;
		padding: 5px 0;

		${isActive ? `color: ${colors.primary}` : `color: ${colors.text}`};

		a {
			${isActive ? `color: ${colors.primary}` : `color: ${colors.text}`};

			svg {
				color: ${colors.primary};
			} 
		}

		@media (min-width: ${size.desktopWidth}px) {
			${topStyle}
		}
	`;
});

const MenuLink = styled(Link)`
	display: flex;
	align-items: center;

	span {
		margin-left: 4px;
	}
`;

const LanguagePicker = DropdownButton;

const ThemePicker = DropdownButton;

const ThemeName = styled.span`
	margin-left: 5px;
`;

const MenuLabel = styled.span<{ isTop?: boolean }>((props) => {
	const {
		isTop,
		theme: { size },
	} = props;

	let topStyle = '';

	if (isTop) {
		topStyle = `
			display: none;
		`;
	}
	return `
		display: block;
		width: 80px;

		@media (min-width: ${size.desktopWidth}px) {
			${topStyle}
		}
`;
});

const Label = styled.div`
	display: flex;
	align-items: center;
	width: 80px;
	height: 20px;
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
	LanguagePicker,
	ThemePicker,
	ThemeName,
	MenuLabel,
	Label,
};
