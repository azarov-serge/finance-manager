import { useCallback } from 'react';
import { categoryApi } from '@store';
import { getError } from '@utils/error';
import { type CategoryEntity } from '@entities';

import { type UseUpdateItemReturnType } from '@hooks/types';

export const useUpdateItem = (): UseUpdateItemReturnType<
	CategoryEntity | undefined,
	CategoryEntity
> => {
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
