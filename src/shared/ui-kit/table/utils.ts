import { isBoolean, isNumber, isString, isDate } from '@utils';
import { type ColDef, type Filters, type SortItem } from './types';

export const filterRows = <T extends Record<string, unknown>>(
	rows: T[],
	filters: Filters,
	columnDefs: Array<ColDef<any>>,
): any[] => {
	const fields = Object.keys(filters);
	if (!rows.length && !fields.length) {
		return rows;
	}

	return rows.filter((row: any, index) => {
		let isFiltered = true;

		fields.forEach((field) => {
			const filter = filters[field] || {};
			const { getFilterValue } =
				columnDefs.find((item) => item.field === field) || {};
			const value = getFilterValue
				? getFilterValue({ data: row, index })
				: row[field];
			const checked = filter[value] !== undefined ? filter[value] : true;

			isFiltered = isFiltered && checked;
		});

		return isFiltered;
	});
};

export const rowComparator = <T extends Record<string, unknown>>(
	a: T,
	b: T,
	sortItem: SortItem,
): number => {
	const key = Object.keys(sortItem)[0];
	const type = sortItem[key];

	const valueA = a[key] === null || a[key] === undefined ? -1 : a[key];
	const valueB = b[key] === null || b[key] === undefined ? -1 : b[key];

	const coef = type === 'asc' ? 1 : -1;

	if (isString(valueA) || isString(valueB)) {
		return String(valueA) > String(valueB) ? 1 * coef : -1 * coef;
	}

	if (isBoolean(valueA) || isNumber(valueA) || isDate(valueA)) {
		return (Number(valueA) - Number(valueB)) * coef;
	}

	return 0;
};
