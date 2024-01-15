import { useCallback } from 'react';
import { transactionApi } from '@store';
import { getError } from '@utils/error';
import { type TransactionEntity } from '@entities';

import { type UseUpdateItemReturnType } from '@hooks/types';

export const useUpdateItem = (): UseUpdateItemReturnType<
	TransactionEntity | undefined,
	TransactionEntity
> => {
	const [updateItem, { data, isLoading, error }] =
		transactionApi.useUpdateItemMutation();

	const handleUpdateItem = useCallback(
		async (transaction: TransactionEntity): Promise<void> => {
			await updateItem(transaction);
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
