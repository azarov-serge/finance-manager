import styled from '@emotion/styled';

const Wrapper = styled.article`
	width: auto;
	padding: 0;
`;

const ControlsWrapper = styled.div`
	display: flex;
`;

const InfoWrapper = styled.div`
	width: 65%;
	margin-left: 10px;

	& p {
		margin: 0;
	}

	& p:nth-of-type(1) {
		margin-bottom: 5px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const Styled = {
	Wrapper,
	ControlsWrapper,
	InfoWrapper,
};
