import styled from '@emotion/styled';

const Wrapper = styled.div`
	display: flex;

	& button:nth-of-type(1) {
		margin-right: 5px;
	}
`;

const NameInput = styled.input<{ withRemoveButton: boolean }>((props) => {
	return `
		width: 100%;
		margin: ${props.withRemoveButton ? '0 5px' : '0 0 0 5px'};
`;
});

export const Styled = {
	Wrapper,
	NameInput,
};
