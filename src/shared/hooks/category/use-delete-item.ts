import { categoryApi } from '@store';
import { getError } from '@utils/error';

import { useCallback } from 'react';

export const useDeleteItem = (): {
	deleteItem: (data: string | string[]) => Promise<void>;
	isLoading: boolean;
	error: string;
} => {
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
