import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TitleProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	symantic?: boolean;
	level?: 1 | 2 | 3 | 4 | 5;
	align?: 'left' | 'center' | 'right';
	mb?: number;
}

export interface CommonStyledProps {
	align: Required<TitleProps>['align'];
	mb: TitleProps['mb'];
}
