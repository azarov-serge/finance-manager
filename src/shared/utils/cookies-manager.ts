import { UserEntity } from '@entities';
import Cookies from 'js-cookie';
import { type ThemeName } from '@emotion/react';

import { isObject, isUser } from './type-guards';

const keys = {
	refreshToken: 'refreshToken',
	user: 'user',
	themeName: 'themeName',
	language: 'language',
} as const;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CookiesManager {
	static setRefreshToken = (token: string): void => {
		Cookies.set(keys.refreshToken, token);
	};

	static getRefreshToken = (): string => {
		return Cookies.get(keys.refreshToken) ?? '';
	};

	static deleteRefreshToken = (): void => {
		Cookies.remove(keys.refreshToken);
	};

	static setUser = (user: UserEntity | null): void => {
		if (!isUser(user)) {
			Cookies.remove(keys.user);

			return;
		}

		Cookies.set(keys.user, JSON.stringify(user.toJson()));
	};

	static getUser = (): UserEntity | null => {
		try {
			const json = JSON.parse(Cookies.get('user') ?? '');
			if (!json || !isObject(json)) {
				return null;
			}

			return UserEntity.fromJson(json as Record<string, string>);
		} catch (error) {
			return null;
		}
	};

	static setThemeName = (themeName: ThemeName): void => {
		Cookies.set(keys.themeName, themeName);
	};

	static getThemeName = (): string => {
		return Cookies.get(keys.themeName) ?? '';
	};

	static setLanguage = (language: string): void => {
		Cookies.set(keys.language, language);
	};

	static getLanguage = (): string => {
		return Cookies.get(keys.language) ?? '';
	};
}
