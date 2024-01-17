import styled from '@emotion/styled';
import { Page } from '@ui-kit/page/page';

const Wrapper = styled(Page)((props) => {
	return `
        width: 100%;
    `;
});

const ContentWrapper = styled.div`
	display: flex;
`;

const SettingsButtonWrapper = styled.div`
	display: flex;
	justify-content: end;

	button {
		margin-right: 10px;
	}
`;

export const Styled = {
	Wrapper,
	ContentWrapper,
	SettingsButtonWrapper,
};
