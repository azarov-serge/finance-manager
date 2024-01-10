import styled from '@emotion/styled';

const Wrapper = styled.div<{ isOpened: boolean }>((props) => {
	const { isOpened, theme } = props;

	const style: Record<string, string> = {
		true: `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        `,
		false: `
            position: relative;
            width: 0;
            height: 0;
        `,
	};

	return `
        display: flex;
        justify-content: center;
        align-items: center;
        
        background: ${theme.colors.modal};
        ${style[`${isOpened}`]}
    `;
});

const CloseButtonWrapper = styled.div`
	display: flex;
	justify-content: end;
	margin-bottom: 5px;
`;

const Modal = styled.div<{ isOpened: boolean }>((props) => {
	const {
		isOpened,
		theme: { colors, borderRadius },
	} = props;

	const style: Record<string, string> = {
		true: `
            display: block;
        `,
		false: `
            display: none;
        `,
	};

	return `
        padding: 10px 20px;
        background: ${colors.surface};
        border-radius: ${borderRadius}px;
        ${style[`${isOpened}`]}

    `;
});

export const Styled = {
	Wrapper,
	Modal,
	CloseButtonWrapper,
};
