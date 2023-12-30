export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface SignInData {
	user: IUser;
	tokens: ITokens;
}

export interface SignUpData {
	user: IUser;
	tokens: ITokens;
}
