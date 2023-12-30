import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';

import { type Status, type StatusData } from '@store/core/fetch-resource';
import { type ITokens } from '@store/services/auth-service/types';
import { authService } from '../../services';
import { userStore } from '../user-store/user-store';

class AuthStore {
	private readonly authService = authService;
	private readonly userStore = userStore;

	isAuth: boolean | null = null;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	async signIn(
		login: string,
		password: string,
	): Promise<StatusData<{ user: IUser; tokens: ITokens }>> {
		const response = await this.authService.signIn(login, password);

		if (response.response) {
			this.isAuth = true;

			Cookies.set(
				'accessToken',
				response.response?.tokens.accessToken || '',
			);

			Cookies.set(
				'refreshToken',
				response.response?.tokens.refreshToken || '',
			);

			Cookies.set(
				'user',
				JSON.stringify(response.response?.user) || '{}',
			);

			this.userStore.user = response.response?.user || null;
		}

		return response;
	}

	get signInStatus(): Status {
		return this.authService.signInStatus;
	}

	async signUp(
		login: string,
		password: string,
	): Promise<StatusData<{ user: IUser; tokens: ITokens }>> {
		const status = await this.authService.signUp(login, password);

		if (status.response) {
			this.isAuth = true;

			Cookies.set(
				'accessToken',
				status.response?.tokens.accessToken || '',
			);

			Cookies.set(
				'refreshToken',
				status.response?.tokens.refreshToken || '',
			);

			Cookies.set('user', JSON.stringify(status.response?.user) || '{}');

			this.userStore.user = status.response?.user || null;
		}

		return status;
	}

	async checkAuth(): Promise<StatusData<ITokens | null>> {
		const response = await this.authService.refreshToken();

		if (response.response) {
			this.isAuth = true;
			Cookies.set('accessToken', response.response?.accessToken || '');
			Cookies.set('refreshToken', response.response?.refreshToken || '');
		} else if (response.status.error) {
			this.isAuth = false;
		}

		return response;
	}

	async signOut(): Promise<StatusData<undefined>> {
		const status = await this.authService.signOut();

		Cookies.remove('accessToken');
		Cookies.remove('refreshToken');

		this.userStore.user = null;

		return status;
	}
}

export const authStore = new AuthStore();
