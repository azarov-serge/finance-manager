import styled from '@emotion/styled';

const Wrapper = styled.div((props) => {
	const {
		theme: { colors, borderRadius },
	} = props;

	return `
        width: auto;
        height: 100%;
        padding: 10px 20px;
        background: ${colors.surface};
        border-radius: ${borderRadius}px;
    `;
});

export const Styled = {
	Wrapper,
};
