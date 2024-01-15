import styled from '@emotion/styled';

const Table = styled.table((props) => {
	const {
		theme: { colors },
	} = props;

	return `
        width: 100%;
		margin-top: 10px;
		border-collapse: collapse;
		border: 1px solid ${colors.border};
		background: ${colors.background};

		& tr:nth-of-type(2n) {
			background-color: ${colors.surface};
		}
    `;
});

export const Tr = styled.tr((props) => {
	const {
		theme: { colors },
	} = props;

	return `
		display: flex;
		width: 100%;
        border-collapse: collapse;
        border: 1px solid ${colors.border};
    `;
});

export const Styled = {
	Table,
};
