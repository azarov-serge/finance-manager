import { type MouseEvent, type CSSProperties } from 'react';

export interface ColDef<T> {
	field: string;
	headerName?: string;
	headerRenderer?: () =>
		| JSX.Element
		| string
		| number
		| boolean
		| null
		| undefined;
	sortable?: boolean;
	filter?: boolean;
	getFilterValue?: (props: { data: T; index?: number }) => string;
	width?: number;
	minWidth?: number;
	maxWidth?: number;
	justifyContent?: CSSProperties['justifyContent'];
	alignItems?: CSSProperties['alignItems'];
	cellRenderer?: (props: {
		data: T;
		index?: number;
	}) => JSX.Element | string | number | boolean | null | undefined;
}

export interface RowClickEent<T> {
	data: T;
	index: number;
	event: MouseEvent<HTMLTableRowElement>;
}

export interface TableProps<T> {
	rows: T[];
	columnDefs: Array<ColDef<T>>;
	height?: number;
	getRowId: (recordItem: any) => any;
	onRowClick?: (evt: RowClickEent<unknown>) => void;
}

export type SortType = 'asc' | 'desc';

// { field: SortType }
export type SortItem = Record<string, SortType>;

// value: boolean
export type Filter = Record<string, boolean>;
// { field: { value: boolean } }
export type Filters = Record<string, Filter>;
