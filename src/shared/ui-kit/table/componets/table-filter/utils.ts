import { type Filter } from '@ui-kit/table/types';

export const createSelectAllFilter = (
	filter: Filter,
	checked: boolean,
): Filter =>
	Object.keys(filter).reduce(
		(acc: Record<string, boolean>, value: string) => {
			acc[value] = checked;

			return acc;
		},
		{},
	);
