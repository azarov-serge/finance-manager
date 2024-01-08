import { type UserEntity } from '@entities';

export interface UserState {
	isAuth: boolean | null;
	user: UserEntity | null;
}
