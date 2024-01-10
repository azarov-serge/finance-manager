import styled from '@emotion/styled';
import { Page } from '@ui-kit/page/page';

const Wrapper = styled.div`
	width: 100%;
`;

const TransactionWrapper = styled(Page)((props) => {
	return `
        width: 100%;
    `;
});

export const Styled = {
	Wrapper,
	TransactionWrapper,
};
