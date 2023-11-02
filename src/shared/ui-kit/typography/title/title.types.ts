import type { PropsWithChildren } from 'react';

export type TitleProps = PropsWithChildren<{
	symantic?: boolean;
	level?: 1 | 2 | 3 | 4 | 5;
	align?: 'left' | 'center' | 'right';
	mb?: number;
}>;

export interface CommonStyledProps {
	align: Required<TitleProps>['align'];
	mb: TitleProps['mb'];
}
