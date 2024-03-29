import { useCallback } from 'react';
import { categoryApi } from '@store';
import { getError, isUser } from '@utils';
import { type CategoryEntity } from '@entities';

import { useUser } from '../user/use-user';
import { type UseCreateItemReturnType } from '../types';

export const useCreateItem = (): UseCreateItemReturnType<
	CategoryEntity | undefined,
	CategoryEntity
> => {
	const { user } = useUser();
	const [createItem, { data, isLoading, error }] =
		categoryApi.useCreateItemMutation();

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
