import { useCallback } from 'react';

import { transactionApi } from '@store';
import { isUser, getError } from '@utils';
import { type TransactionEntity } from '@entities';

import { useAppDispatch } from '../redux/use-app-dispatch';
import { useAppSelector } from '../redux/use-app-selector';
import { useUser } from '../user/use-user';

import { type UseFetchListReturnType } from '../types';

export const useFetchList = (): UseFetchListReturnType<
	TransactionEntity[] | undefined
> => {
	const { user } = useUser();
	const dispatch = useAppDispatch();

	const { data, isLoading, error } = useAppSelector(
		transactionApi.endpoints.fetchList.select('fetchList'),
	);

	const fetchData = useCallback(async (): Promise<void> => {
		if (isUser(user)) {
			dispatch(
				transactionApi.endpoints.fetchList.initiate(user?.id ?? ''),
			);
		}
	}, [user]);

	return {
		data,
		fetchData,
		isLoading,
		error: getError(error),
	};
};
