import { makeAutoObservable } from 'mobx';

export class UserStore {
	user: IUser | null = null;

	constructor() {
		makeAutoObservable(this);
	}
}

export const userStore = new UserStore();
