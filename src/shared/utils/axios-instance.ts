import axios from 'axios';
import { CookiesManager } from './cookies-manager';

export const baseUrl = process.env.URL ?? '';

const REFRESH_TOKEN_URL = '/api/auth/refresh-token';

export const axiosInstance = axios.create();

// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
axiosInstance.interceptors.request.use((config) => {
	const token = config.url?.includes(REFRESH_TOKEN_URL)
		? CookiesManager.getRefreshToken()
		: CookiesManager.getAccessToken();

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

// создаем перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
// и переотправить запрос с обновленным accessToken
axiosInstance.interceptors.response.use(
	// в случае валидного accessToken ничего не делаем:
	(config) => {
		return config;
	},
	// в случае просроченного accessToken пытаемся его обновить:
	async (error) => {
		// предотвращаем зацикленный запрос, добавляя свойство _isRetry
		const originalRequest = { ...error.config };
		originalRequest._isRetry = true;
		if (
			// проверим, что ошибка именно из-за невалидного accessToken
			error.response.status === 401 &&
			// проверим, что запрос не повторный
			error.config &&
			!error.config._isRetry
		) {
			try {
				if (window.location.pathname.includes('/sign-')) {
					throw new Error('');
				}

				// запрос на обновление токенов
				const response = await axios.get(
					`${baseUrl}${REFRESH_TOKEN_URL}`,
				);

				// сохраняем новые tokens в cookies
				CookiesManager.setAccessToken(
					response.data?.tokens.accessToken || '',
				);
				CookiesManager.setRefreshToken(
					response.data?.tokens.refreshToken || '',
				);

				// переотправляем запрос с обновленным accessToken
				return await axiosInstance.request(originalRequest);
			} catch (error) {
				console.log('AUTH ERROR', error);
			}
		}
		// на случай, если возникла другая ошибка (не связанная с авторизацией)
		// пробросим эту ошибку
		throw error;
	},
);
