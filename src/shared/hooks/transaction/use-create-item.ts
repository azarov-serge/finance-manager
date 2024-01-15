import { useCallback } from 'react';
import { transactionApi } from '@store';
import { getError, isUser } from '@utils';
import { type TransactionEntity } from '@entities';

import { useUser } from '../user/use-user';
import { type UseCreateItemReturnType } from '../types';

export const useCreateItem = (): UseCreateItemReturnType<
	TransactionEntity | undefined,
	TransactionEntity
> => {
	const { user } = useUser();
	const [createItem, { data, isLoading, error }] =
		transactionApi.useCreateItemMutation();

	const handleCreateItem = useCallback(
		async ({ name }: { name: string }): Promise<void> => {
			if (isUser(user)) {
				await createItem({ name, userId: user.id });
			}
		},
		[user],
	);

	return {
		data,
		isLoading,
		createItem: handleCreateItem,
		error: getError(error),
	};
};
