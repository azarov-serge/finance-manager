import { useCallback } from 'react';
import { transactionApi } from '@store';
import { getError } from '@utils/error';

import { type UseDeleteItemReturnType } from '../types';

export const useDeleteItem = (): UseDeleteItemReturnType => {
	const [deleteItem, { isLoading, error }] =
		transactionApi.useDeleteItemMutation();

	const handleDeleteItem = useCallback(
		async (ids: string[]): Promise<void> => {
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
