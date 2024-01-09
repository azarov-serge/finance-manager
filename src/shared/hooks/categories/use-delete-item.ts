import { categoryApi } from '@store';
import { getError } from '@utils/error';
import { type CategoryEntity } from '@entities';

import { useCallback } from 'react';

export const useDeleteItem = (): {
	data: CategoryEntity | undefined;
	deleteItem: (category: CategoryEntity) => Promise<void>;
	isLoading: boolean;
	error: string;
} => {
	const [deleteItem, { data, isLoading, error }] =
		categoryApi.useDeleteItemMutation();

	const handleDeleteItem = useCallback(
		async (category: CategoryEntity): Promise<void> => {
			await deleteItem(category);
		},
		[],
	);

	return {
		data,
		isLoading,
		deleteItem: handleDeleteItem,
		error: getError(error),
	};
};
