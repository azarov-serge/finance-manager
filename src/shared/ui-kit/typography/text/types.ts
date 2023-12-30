import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TextProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	kind?: 'normal' | 'danger';
	size?: 'small' | 'medium';
	align?: 'left' | 'center' | 'right';
	mb?: number;
}
