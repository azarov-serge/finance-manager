import { type ChangeEvent } from 'react';
import { type TableFilterProps } from '../types';
import { createSelectAllFilter } from '../utils';

export const useTableFilter = <T>(
	props: TableFilterProps<T>,
): {
	isSelectAll: boolean;
	handleFilterClick: (evt: ChangeEvent<HTMLInputElement>) => void;
	handleSelectAllFilterClick: (evt: ChangeEvent<HTMLInputElement>) => void;
} => {
	const { field, filter, onFilterClick } = props;

	let isSelectAll = true;

	const fields = Object.keys(filter);

	for (let index = 0; index < fields.length; index++) {
		const value = fields[index];
		const checked = filter[value];

		if (!checked) {
			isSelectAll = false;

			break;
		}
	}

	const handleFilterClick = (evt: ChangeEvent<HTMLInputElement>): void => {
		const field =
			(evt.target as HTMLInputElement).getAttribute('data-field') || '';

		const value = evt.target.name;
		const checked = evt.target.checked;

		onFilterClick(field, {
			...filter,
			[value]: checked,
		});
	};

	const handleSelectAllFilterClick = (
		evt: ChangeEvent<HTMLInputElement>,
	): void => {
		const checked = evt.target.checked;
		onFilterClick(field, createSelectAllFilter(filter, checked));
	};

	return {
		isSelectAll,
		handleFilterClick,
		handleSelectAllFilterClick,
	};
};
