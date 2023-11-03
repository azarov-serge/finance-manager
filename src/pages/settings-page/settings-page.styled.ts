import styled from '@emotion/styled';

import { DropdownButton } from '@ui-kit/buttons/drop-down-button/dropdown-button';

const LanguagePicker = DropdownButton;

const ThemePicker = DropdownButton;

const ThemeName = styled.span`
	margin-left: 5px;
`;

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
}>((props) => {
	const {
		isActive,
		theme: { colors },
	} = props;

	let color = isActive ? colors.accent : colors.primary;

	if (isActive === undefined) {
		color = colors.text;
	}

	return `
		display: flex;
		justify-content: start;
		align-items: center;

		min-width: 80px;

		margin: 10px 0;
		padding: 5px 0;

		color: ${color};
	`;
});

const MenuLabel = styled.span`
	display: block;
	width: 80px;
`;

const Label = styled.div`
	display: flex;
	align-items: center;
	width: 80px;
	height: 20px;
`;

export const Styled = {
	LanguagePicker,
	ThemePicker,
	ThemeName,
	Menu,
	MenuItem,
	MenuLabel,
	Label,
};
