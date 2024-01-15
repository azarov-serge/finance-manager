import React from 'react';

import { Button } from '../button/button';
import { Portal } from '../../base/portal/portal';
import ToggleIcon from '../../assets/icons/chevron-down.inline.svg';

import { useDropdownButton } from './hooks/use-dropdown-button';
import { Styled } from './styled';
import type { DropdownButtonProps } from './types';

export const DropdownButton: React.FC<DropdownButtonProps> = (props) => {
	const {
		menu,
		className,
		children,
		withIcon = true,
		isCloseByItemClick = true,
	} = props;
	const {
		isOpened,
		toggle,

		buttonWrapperRef,
		contentWrapperRef,
		contentStyle,
	} = useDropdownButton();

	if (
		(props.isOpened !== undefined && props.onMenuClick === undefined) ||
		(props.isOpened === undefined && props.onMenuClick !== undefined)
	) {
		throw new Error('Need use isOpened and onMenuClick together');
	}

	return (
		<div ref={buttonWrapperRef} className={className}>
			<Button onClick={props.onMenuClick ?? toggle}>
				<Styled.ToggleButton
					isOpened={props.isOpened ?? isOpened}
					withIcon={withIcon}
				>
					{children}
					{withIcon ?? <ToggleIcon width="16px" height="16px" />}
				</Styled.ToggleButton>
			</Button>

			<Portal>
				<Styled.DropdownButtonWrapper
					isOpened={props.isOpened ?? isOpened}
					onClick={
						isCloseByItemClick
							? props.onMenuClick ?? toggle
							: undefined
					}
				>
					<Styled.DropdownButtonContentWrapper
						isOpened={props.isOpened ?? isOpened}
						ref={contentWrapperRef}
						contentStyle={contentStyle}
					>
						{(props.isOpened ?? isOpened) && menu}
					</Styled.DropdownButtonContentWrapper>
				</Styled.DropdownButtonWrapper>
			</Portal>
		</div>
	);
};
