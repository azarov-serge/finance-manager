import { categoryApi } from '@store';
import { getError } from '@utils/error';
import { type CategoryEntity } from '@entities';

import { useUser } from '../user/use-user';

export const useGetList = (): {
	data: CategoryEntity[] | undefined;
	isLoading: boolean;
	error: string;
} => {
	const { user } = useUser();
	const { data, isLoading, isFetching, error } =
		categoryApi.useFetchListQuery(user?.id || '');

	return { data, isLoading: isLoading || isFetching, error: getError(error) };
};
