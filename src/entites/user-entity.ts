export class UserEntity implements IUser {
	id: string;
	createdAt: Date;
	login: string;

	constructor(user: IUser) {
		this.id = user.id;
		this.createdAt = user.createdAt;
		this.login = user.login;
	}

	toJson = (): Record<string, string> => {
		return {
			id: this.id,
			createdAt: this.createdAt.toISOString(),
			login: this.login,
		};
	};

	static fromJson = (json: Record<string, string> | IUser): UserEntity => {
		return new UserEntity({
			id: json.id,
			createdAt: new Date(json.createdAt),
			login: json.login,
		});
	};
}
