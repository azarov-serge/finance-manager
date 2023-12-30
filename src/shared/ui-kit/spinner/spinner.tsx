import React from 'react';

import Gear from '../assets/icons/gears.inline.svg';
import Img from '../assets/icons/robot-is-thinking.inline.svg';

import { Styled } from './styled';

export const Spinner: React.FC = () => {
	return (
		<Styled.Wrapper>
			<Styled.GearsWrapper>
				<Styled.GearWrapper1>
					<Gear />
				</Styled.GearWrapper1>
				<Styled.GearWrapper2>
					<Gear />
				</Styled.GearWrapper2>
			</Styled.GearsWrapper>
			<Img />
		</Styled.Wrapper>
	);
};
