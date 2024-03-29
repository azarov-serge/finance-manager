import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DropdownButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	menu: JSX.Element;
	withIcon?: boolean;
	isCloseByItemClick?: boolean;
	isOpened?: boolean;
	onMenuClick?: () => void;
}
