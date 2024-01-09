import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@store/core/axios-base-query';
import { apiUrl } from '@store/core/constants';
import { CategoryEntity } from '@entities';

export const categoryApi = createApi({
	reducerPath: 'categoryApi',
	baseQuery: axiosBaseQuery({ baseUrl: `${apiUrl}/category` }),
	tagTypes: ['Category'],
	endpoints: (build) => ({
		fetchList: build.query<CategoryEntity[], string>({
			query: (userId) => ({
				url: `/get-list/${userId}`,
				method: 'GET',
				adaptResponse: (respone) =>
					Array.isArray(respone)
						? respone.map(CategoryEntity.fromJson)
						: [],
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Category' as const,
								id,
							})),
							{ type: 'Category', id: 'LIST' },
					  ]
					: [{ type: 'Category', id: 'LIST' }],
		}),
		createItem: build.mutation<
			CategoryEntity,
			{ name: string; userId: string }
		>({
			query: (data) => ({
				url: ``,
				method: 'POST',
				data,
			}),
			invalidatesTags: [{ type: 'Category', id: 'LIST' }],
		}),
		updateItem: build.mutation<CategoryEntity, CategoryEntity>({
			query: (category) => ({
				url: ``,
				method: 'PATCH',
				data: category.toJson(),
			}),
			invalidatesTags: [{ type: 'Category', id: 'LIST' }],
		}),
		deleteItem: build.mutation<CategoryEntity, CategoryEntity>({
			query: (item) => ({
				url: `/${item.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Category', id: 'LIST' }],
		}),
	}),
});
