import styled from '@emotion/styled';

const Wrapper = styled.div((props) => {
	return `
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 20px;
    `;
});

const GearsWrapper = styled.div((props) => {
	return `
        display: flex;
        width: 150px;
        height: 200px;
    `;
});

const GearWrapper1 = styled.div((props) => {
	return `
        width: 100px;
        height: 100px;
    `;
});

const GearWrapper2 = styled.div((props) => {
	return `
        width: 100px;
        height: 100px;
        margin-top: 45px;
    `;
});

export const Styled = {
	Wrapper,
	GearsWrapper,
	GearWrapper1,
	GearWrapper2,
};
