const keys = {
	accessToken: 'accessToken',
} as const;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SessionStorageManager {
	static setAccessToken = (token: string): void => {
		sessionStorage.setItem(keys.accessToken, token);
	};

	static getAccessToken = (): string => {
		return sessionStorage.getItem(keys.accessToken) ?? '';
	};
}
