export class UserEntity implements IUser {
	id: IUser['id'];
	createdAt: IUser['createdAt'];
	login: IUser['login'];

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
			createdAt: json?.createdAt ? new Date(json.createdAt) : new Date(),
			login: json?.login ?? '',
		});
	};
}
