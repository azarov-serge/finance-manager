import styled from '@emotion/styled';

const Wrapper = styled.aside((props) => {
	const { theme } = props;

	return `
        width: 100%;
        margin-bottom: 10px;
		padding: 10px 20px;

        background-color: ${theme.colors.surface};
        border-radius: ${theme.borderRadius}px;
		overflow: hidden;
`;
});

const ContentWrapper = styled.div`
	display: flex;
`;

const SettingsButtonWrapper = styled.div`
	display: flex;
	justify-content: end;
`;

const ListWrapper = styled.div`
	height: 100%;
	overflow-y: scroll;
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	width: auto;
	margin: 5px;
	margin-left: 0;
	margin-right: 10px;

	padding: 0;
`;

export const Styled = {
	Wrapper,
	ContentWrapper,
	SettingsButtonWrapper,
	ListWrapper,
	List,
	ListItem,
};
