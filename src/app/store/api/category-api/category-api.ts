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
			providesTags: (result) => ['Category'],
		}),
		createPost: build.mutation<CategoryEntity, CategoryEntity>({
			query: (post) => ({
				url: `/`,
				method: 'POST',
				body: post,
			}),
			invalidatesTags: ['Category'],
		}),
		updatePost: build.mutation<CategoryEntity, CategoryEntity>({
			query: (post) => ({
				url: `/`,
				method: 'PATCH',
				body: post,
			}),
			invalidatesTags: ['Category'],
		}),
		deletePost: build.mutation<CategoryEntity, CategoryEntity>({
			query: (post) => ({
				url: `/${post.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Category'],
		}),
	}),
});
