import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig } from 'axios';

import { axiosInstance } from '@utils/axios-instance';
import { ResponseError } from '@utils/response-error';
import { type ThunkDispatch } from '@reduxjs/toolkit';

export type AxiosQueryFn = BaseQueryFn<
	{
		url: string;
		method: AxiosRequestConfig['method'];
		data?: AxiosRequestConfig['data'];
		params?: AxiosRequestConfig['params'];
		headers?: AxiosRequestConfig['headers'];
		adaptResponse?: (response: any) => unknown;
	},
	{
		signal: AbortSignal;
		abort: (reason?: string) => void;
		dispatch: ThunkDispatch<any, any, any>;
		getState: () => unknown;
		extra: unknown;
		endpoint: string;
		type: 'query' | 'mutation';
		forced?: boolean;
	},
	unknown
>;

export const axiosBaseQuery =
	({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): AxiosQueryFn =>
	async ({ url, method, data, params, headers, adaptResponse }) => {
		try {
			const result = await axiosInstance.request({
				url: baseUrl + url,
				method,
				data,
				params,
				headers,
			});
			return {
				data: adaptResponse
					? adaptResponse(result?.data)
					: result?.data,
			};
		} catch (axiosError) {
			const error = axiosError as {
				response: {
					data: { message?: string };
					status?: string;
				};
				message?: string;
			};

			return {
				error: new ResponseError(
					error.response?.data?.message || error.message,
					error.response?.status,
				),
			};
		}
	};
