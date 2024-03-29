import { useCallback } from 'react';
import { categoryApi } from '@store';
import { getError } from '@utils/error';

import { type UseDeleteItemReturnType } from '../types';

export const useDeleteItem = (): UseDeleteItemReturnType => {
	const [deleteItem, { isLoading, error }] =
		categoryApi.useDeleteItemMutation();

	const handleDeleteItem = useCallback(
		async (data: string | string[]): Promise<void> => {
			const ids = Array.isArray(data) ? data : [data];
			await deleteItem({ ids });
		},
		[],
	);

	return {
		isLoading,
		deleteItem: handleDeleteItem,
		error: getError(error),
	};
};
