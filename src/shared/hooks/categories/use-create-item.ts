import { categoryApi } from '@store';
import { getError } from '@utils/error';
import { type CategoryEntity } from '@entities';

import { useUser } from '../user/use-user';
import { useCallback } from 'react';

export const useCreateItem = (): {
	data: CategoryEntity | undefined;
	createItem: (data: { name: string }) => Promise<void>;
	isLoading: boolean;
	error: string;
} => {
	const { user } = useUser();
	const [createItem, { data, isLoading, error }] =
		categoryApi.useCreateItemMutation();

	const handleCreateItem = useCallback(
		async ({ name }: { name: string }): Promise<void> => {
			await createItem({ name, userId: user?.id || '' });
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
