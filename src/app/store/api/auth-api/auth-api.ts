import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@store/core/axios-base-query';
import { apiUrl } from '@store/core/constants';
import { UserEntity } from '@entities';

const adaptResponse = (response: {
	user: Record<string, string>;
	tokens: Record<string, string>;
}): { tokens: ITokens; user: UserEntity } | undefined => {
	if (!response) {
		return undefined;
	}

	return {
		tokens: response.tokens as unknown as ITokens,
		user: UserEntity.fromJson(response.user),
	};
};

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: axiosBaseQuery({ baseUrl: `${apiUrl}/auth` }),
	endpoints: (build) => ({
		signIn: build.mutation<
			{ tokens: ITokens; user: UserEntity },
			{ login: string; password: string }
		>({
			query: (data) => ({
				url: `/sign-in`,
				method: 'POST',
				data,
				adaptResponse,
			}),
		}),
		signUp: build.mutation<
			{ tokens: ITokens; user: UserEntity },
			{ login: string; password: string }
		>({
			query: (data) => ({
				url: `/sign-up`,
				method: 'POST',
				data,
				adaptResponse,
			}),
		}),
		signOut: build.mutation<boolean, { userId: string }>({
			query: (data) => ({
				url: `/sign-out`,
				method: 'POST',
				data,
			}),
		}),
		refreshToken: build.query<{ tokens: ITokens }, { userId: string }>({
			query: (data) => ({
				url: `/refresh-token`,
				method: 'GET',
				data,
			}),
		}),
	}),
});
