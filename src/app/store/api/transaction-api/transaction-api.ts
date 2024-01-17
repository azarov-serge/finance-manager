import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@store/core/axios-base-query';
import { apiUrl } from '@store/core/constants';
import { TransactionEntity } from '@entities';

export const transactionApi = createApi({
	reducerPath: 'transactionApi',
	baseQuery: axiosBaseQuery({ baseUrl: `${apiUrl}/transaction` }),
	tagTypes: ['Transaction'],
	endpoints: (build) => ({
		fetchList: build.query<TransactionEntity[], string>({
			query: (userId) => ({
				url: `/get-list/${userId}`,
				method: 'GET',
				adaptResponse: (respone: TransactionEntity[]) =>
					Array.isArray(respone)
						? respone.map(TransactionEntity.fromJson)
						: [],
			}),
			serializeQueryArgs: (args: { endpointName: string }) => {
				return args.endpointName;
			},
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Transaction' as const,
								id,
							})),
							{ type: 'Transaction', id: 'LIST' },
					  ]
					: [{ type: 'Transaction', id: 'LIST' }],
		}),
		createItem: build.mutation<
			TransactionEntity,
			{ transaction: TransactionEntity; userId: string }
		>({
			query: ({ userId, transaction }) => {
				const json = transaction.toJson();
				delete json.id;
				delete json.createdAt;
				delete json.category;

				return {
					url: ``,
					method: 'POST',
					data: {
						...json,
						categoryId: transaction.category?.id ?? null,
						userId,
					},
				};
			},
			invalidatesTags: [{ type: 'Transaction', id: 'LIST' }],
		}),
		updateItem: build.mutation<TransactionEntity, TransactionEntity>({
			query: (Transaction) => ({
				url: ``,
				method: 'PATCH',
				data: Transaction.toJson(),
			}),
			invalidatesTags: [{ type: 'Transaction', id: 'LIST' }],
		}),
		deleteItem: build.mutation<TransactionEntity, { ids: string[] }>({
			query: (data) => ({
				url: ``,
				method: 'DELETE',
				data,
			}),
			invalidatesTags: [{ type: 'Transaction', id: 'LIST' }],
		}),
	}),
});
