import { type ColDef, type Filter } from '../../types';
import { type TableHeaderProps } from '../table-header/types';

export interface TableFilterProps<T> {
	field: string;
	filter: Filter;
	getFilterValue?: ColDef<T>['getFilterValue'];
	onFilterClick: TableHeaderProps<T>['onFilterClick'];
}
