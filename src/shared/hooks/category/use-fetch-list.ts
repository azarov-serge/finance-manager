import { useCallback } from 'react';

import { categoryApi } from '@store';
import { isUser, getError } from '@utils';
import { type CategoryEntity } from '@entities';

import { useAppDispatch } from '../redux/use-app-dispatch';
import { useAppSelector } from '../redux/use-app-selector';
import { useUser } from '../user/use-user';

import { type UseFetchListReturnType } from '../types';

export const useFetchList = (): UseFetchListReturnType<
	CategoryEntity[] | undefined
> => {
	const { user } = useUser();
	const dispatch = useAppDispatch();

	const { data, isLoading, error } = useAppSelector(
		categoryApi.endpoints.fetchList.select('fetchList'),
	);

	const fetchData = useCallback(async (): Promise<void> => {
		if (isUser(user)) {
			dispatch(categoryApi.endpoints.fetchList.initiate(user?.id ?? ''));
		}
	}, [user]);

	return {
		data,
		fetchData,
		isLoading,
		error: getError(error),
	};
};
