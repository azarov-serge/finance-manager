import { type TableProps } from '../../types';
import { type CSSProperties } from 'react';

export interface TableContentProps<T>
	extends Pick<
		TableProps<T>,
		'rows' | 'columnDefs' | 'getRowId' | 'onRowClick'
	> {}

export type TdProps = Partial<{
	width: CSSProperties['width'];
	minWidth: CSSProperties['maxWidth'];
	maxWidth: CSSProperties['maxWidth'];
	justifyContent: CSSProperties['justifyContent'];
	alignItems: CSSProperties['alignItems'];
}>;
