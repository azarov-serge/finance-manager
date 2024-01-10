import { categoryApi } from '@store';
import { getError } from '@utils/error';
import { type CategoryEntity } from '@entities';

import { useCallback } from 'react';

export const useUpdateItem = (): {
	data: CategoryEntity | undefined;
	updateItem: (category: CategoryEntity) => Promise<void>;
	isLoading: boolean;
	error: string;
} => {
	const [updateItem, { data, isLoading, error }] =
		categoryApi.useUpdateItemMutation();

	const handleUpdateItem = useCallback(
		async (category: CategoryEntity): Promise<void> => {
			await updateItem(category);
		},
		[],
	);

	return {
		data,
		isLoading,
		updateItem: handleUpdateItem,
		error: getError(error),
	};
};
