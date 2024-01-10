import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

export interface ModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isOpened: boolean;
	onCloseClick?: () => void;
}
