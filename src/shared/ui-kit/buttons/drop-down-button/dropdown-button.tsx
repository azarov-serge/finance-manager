import React from 'react';

import { Button } from '../button/button';
import { Portal } from '../../base/portal/portal';
import ToggleIcon from '../../assets/chevron-down.inline.svg';

import { useDropdownButton } from './hooks/use-dropdown-button';
import { Styled } from './dropdown-button.styled';
import type { DropdownButtonProps } from './dropdown-button.types';

export const DropdownButton: React.FC<DropdownButtonProps> = (props) => {
	const { menu, children } = props;
	const {
		isOpened,
		toggle,
		buttonWrapperRef,
		contentWrapperRef,
		contentStyle,
	} = useDropdownButton();

	return (
		<div ref={buttonWrapperRef}>
			<Button kind="ghost" onClick={toggle}>
				<Styled.ToggleButton isOpened={isOpened}>
					{children}
					<ToggleIcon width="16px" height="16px" />
				</Styled.ToggleButton>
			</Button>

			<Portal>
				<Styled.DropdownButtonWrapper
					isOpened={isOpened}
					onClick={toggle}
				>
					<Styled.DropdownButtonContentWrapper
						isOpened={isOpened}
						ref={contentWrapperRef}
						contentStyle={contentStyle}
					>
						{isOpened && menu}
					</Styled.DropdownButtonContentWrapper>
				</Styled.DropdownButtonWrapper>
			</Portal>
		</div>
	);
};
