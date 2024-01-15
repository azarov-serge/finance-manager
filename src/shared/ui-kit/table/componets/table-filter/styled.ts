import styled from '@emotion/styled';
import { DropdownButton } from '@ui-kit/buttons/drop-down-button/dropdown-button';

const FilterDropdownButton = styled(DropdownButton)<{ isSelectAll: boolean }>((
	props,
) => {
	const {
		isSelectAll,
		theme: { colors },
	} = props;

	return `
		margin-left: 5px;

		& span {
			color: inherit;
		}

		& button {
			height: auto;
			padding: 0;
			color: ${isSelectAll ? colors.text : colors.primary};
			border: none;
		}
`;
});

const FilterContent = styled.div((props) => {
	return `
		max-height: 300px;
		overflow: hidden;
	`;
});

const FilterList = styled.ul((props) => {
	return `
		margin: 0;
		padding: 0;

		list-style: none;
		min-width: 200px;
		max-height: 250px;
		overflow-y: scroll;
	`;
});

const FilterListItem = styled.li((props) => {
	return `
		display: flex;
		align-items: center;
	`;
});

const FilterListItemSelectAll = styled(FilterListItem)((props) => {
	const {
		theme: { colors },
	} = props;

	return `
		position: relative;
		margin-bottom: 4px;
		padding-bottom: 4px;

		::before {
			content: "";
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 1px;
			background-color: ${colors.border};
		}
	`;
});

export const Styled = {
	FilterDropdownButton,
	FilterContent,
	FilterList,
	FilterListItem,
	FilterListItemSelectAll,
};
