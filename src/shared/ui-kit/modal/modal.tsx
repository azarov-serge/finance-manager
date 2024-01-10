import React from 'react';
import { Portal } from '@ui-kit/base/portal/portal';
import { Button } from '@ui-kit/buttons/button/button';
import CloseIcon from '@assets/icons/close.inline.svg';

import { type ModalProps } from './types';
import { Styled } from './styled';

export const Modal: React.FC<ModalProps> = (props) => {
	const { isOpened, onCloseClick, children, ...rest } = props;
	return (
		<Portal id="modal">
			<Styled.Wrapper isOpened={isOpened}>
				<Styled.Modal {...rest} isOpened={isOpened}>
					{onCloseClick && (
						<Styled.CloseButtonWrapper>
							<Button kind="ghost" onClick={onCloseClick}>
								<CloseIcon width={14} height={14} />
							</Button>
						</Styled.CloseButtonWrapper>
					)}
					{children}
				</Styled.Modal>
			</Styled.Wrapper>
		</Portal>
	);
};
