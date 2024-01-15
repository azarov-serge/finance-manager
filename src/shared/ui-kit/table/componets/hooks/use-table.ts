import { useState, type MouseEvent, useEffect } from 'react';

import { DEFAULT_SORT } from '../../constants';
import {
	type Filter,
	type Filters,
	type SortItem,
	type TableProps,
} from '../../types';
import { filterRows, rowComparator } from '../../utils';

export const useTable = <T>(
	props: TableProps<T>,
): {
	rows: TableProps<T>['rows'];
	filters: Filters;
	sortItem: SortItem;
	onSortClick: (evt: MouseEvent<HTMLButtonElement>) => void;
	onFilterClick: (field: string, filter: Filter) => void;
} => {
	const [sortItem, setSortItem] = useState<SortItem>({});
	const { columnDefs } = props;
	let rows = props.rows;

	const [filters, setFilters] = useState<Filters>({});

	useEffect(() => {
		const filterKeys = columnDefs
			.filter((item) => item.filter)
			.map((item) => item.field);

		if (filterKeys.length) {
			const filters: Filters = {};

			rows.forEach((row, index) => {
				filterKeys.forEach((filterKey) => {
					const { getFilterValue } =
						columnDefs.find((item) => item.field === filterKey) ||
						{};
					filters[filterKey] = filters[filterKey] || {};

					const filterValue = getFilterValue
						? getFilterValue({ data: row, index })
						: // eslint-disable-next-line @typescript-eslint/ban-ts-comment
						  // @ts-expect-error
						  row[filterKey];
					filters[filterKey][filterValue] = true;
				});
			});

			setFilters(filters);
		}
	}, []);

	const onSortClick = (evt: MouseEvent<HTMLButtonElement>): void => {
		const field = (evt.target as HTMLButtonElement).name;
		setSortItem((prev) => {
			if (!prev[field]) {
				return { [field]: DEFAULT_SORT === 'desc' ? 'asc' : 'desc' };
			}

			return { [field]: prev[field] === 'desc' ? 'asc' : 'desc' };
		});
	};

	const onFilterClick = (field: string, filter: Filter): void => {
		setFilters((prev) => {
			return {
				...prev,
				[field]: filter,
			};
		});
	};

	if (JSON.stringify(filters) !== '{}') {
		rows = filterRows<Record<string, unknown>>(
			[...(rows as Array<Record<string, unknown>>)],
			filters,
			columnDefs,
		);
	}

	if (rows.length && JSON.stringify(sortItem) !== '{}') {
		rows = [...rows].sort((a, b) =>
			rowComparator<Record<string, unknown>>(
				a as Record<string, unknown>,
				b as Record<string, unknown>,
				sortItem,
			),
		);
	}

	return {
		rows,
		filters,
		sortItem,
		onSortClick,
		onFilterClick,
	};
};
