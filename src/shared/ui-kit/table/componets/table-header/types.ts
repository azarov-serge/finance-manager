import {
	type Filter,
	type Filters,
	type SortItem,
	type TableProps,
} from '../../types';
import { type CSSProperties, type MouseEvent } from 'react';

export interface TableHeaderProps<T> extends Pick<TableProps<T>, 'columnDefs'> {
	sortItem: SortItem;
	filters: Filters;
	onSortClick: (evt: MouseEvent<HTMLButtonElement>) => void;
	onFilterClick: (field: string, filter: Filter) => void;
}

export type ThProps = Partial<{
	width: CSSProperties['width'];
	minWidth: CSSProperties['maxWidth'];
	maxWidth: CSSProperties['maxWidth'];
}>;
