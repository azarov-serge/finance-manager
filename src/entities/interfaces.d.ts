export {};

declare global {
	interface ITokens {
		accessToken: string;
		refreshToken: string;
	}

	interface IUser {
		id: string;
		createdAt: Date;
		login: string;
	}

	interface ICategory {
		id: string;
		createdAt: Date;
		name: string;
	}

	interface ITransaction {
		id: string;
		createdAt: Date;
		name: string;
		price: number;
		category: null | ICategory;
	}
}
