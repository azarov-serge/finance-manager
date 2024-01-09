import styled from '@emotion/styled';
import { Page } from '@ui-kit/page/page';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const CateegoriesWrapper = styled.aside((props) => {
	const { theme } = props;

	return `
        width: 30%;
        height: 100%;
        margin-right: 10px;
		padding: 10px 20px;

        background-color: ${theme.colors.surface};
        border-radius: ${theme.borderRadius}px;
`;
});

const CategoriesList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const CategoriesItem = styled.li`
	display: flex;
	width: auto;
	margin: 5px;
	margin-left: 0;
	margin-right: 10px;

	padding: 0;
	list-style: none;
`;

const TransactionWrapper = styled(Page)((props) => {
	return `
        width: 70%;
        height: 100%;
    `;
});

export const Styled = {
	Wrapper,
	CateegoriesWrapper,
	CategoriesList,
	CategoriesItem,
	TransactionWrapper,
};
