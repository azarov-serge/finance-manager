import styled from '@emotion/styled';

const Wrapper = styled.div`
	width: 300px;
	height: 400px;
	overflow: hidden;
`;

const SearchInput = styled.input`
	width: 100%;
`;

const ListWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 5px;
	overflow: hidden;
`;

const List = styled.ul`
	width: 100%;
	height: 90%;
	margin: 0;
	padding: 0;
	list-style: none;
	overflow-y: scroll;
	padding-right: 15px;
`;

const ListItem = styled.li((props) => {
	const {
		theme: { colors },
	} = props;

	return `
		width: auto;
		margin: 10px 0;
		padding: 10px 0;

		border-bottom: 1px solid ${colors.border};
`;
});

export const Styled = {
	Wrapper,
	SearchInput,
	ListWrapper,
	List,
	ListItem,
};
