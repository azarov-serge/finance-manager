import {
	FetchResource,
	type RESTMethod,
	type Resource,
	type StatusData,
	type Status,
} from '@store/core/fetch-resource';
import { UserEntity } from '@entites';
import { baseUrl } from '../constants';
import { type SignUpData, type ITokens, type SignInData } from './types';

class AuthService extends FetchResource {
	constructor() {
		super({
			url: baseUrl + '/api/auth',
			useMock: false,
		});
	}

	resources = {
		signIn: (): Resource => {
			const url = '/sign-in';
			const method: RESTMethod = 'post';

			return {
				url,
				method,
				name: `${method}${url}`,
			};
		},
		signUp: (): Resource => {
			const url = '/sign-up';
			const method: RESTMethod = 'post';

			return {
				url,
				method,
				name: `${method}${url}`,
			};
		},
		refreshToken: (): Resource => {
			const url = '/refresh-token';
			const method: RESTMethod = 'get';

			return {
				url,
				method,
				name: `${method}${url}`,
			};
		},
		signOut: (): Resource => {
			const url = '/sign-out';
			const method: RESTMethod = 'post';

			return {
				url,
				method,
				name: `${method}${url}`,
			};
		},
	};

	async signIn(
		login: string,
		password: string,
	): Promise<StatusData<SignInData>> {
		const { response, ...rest } = await this.rest.request<SignInData>({
			resource: this.resources.signIn(),
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({ login, password }),
		});

		return {
			...rest,
			response: response
				? {
						...response,
						user: UserEntity.fromJson(response.user),
				  }
				: null,
		};
	}

	get signInStatus(): Status {
		return this.rest.getStatus(this.resources.signIn());
	}

	async signUp(
		login: string,
		password: string,
	): Promise<StatusData<SignUpData>> {
		const { response, ...rest } = await this.rest.request<SignUpData>({
			resource: this.resources.signUp(),
			data: { login, password },
		});

		return {
			...rest,
			response: response
				? {
						...response,
						user: UserEntity.fromJson(response.user),
				  }
				: null,
		};
	}

	async refreshToken(): Promise<StatusData<ITokens | null>> {
		const response = await this.rest.request<ITokens>({
			resource: this.resources.refreshToken(),
		});

		return response;
	}

	async signOut(): Promise<StatusData<undefined>> {
		return await this.rest.request<undefined>({
			resource: this.resources.signOut(),
		});
	}
}

export const authService = new AuthService();
