export {};

declare global {
	interface IUser {
		id: string;
		createdAt: Date;
		login: string;
	}
}
