import { store } from '@store';

export const useUser = (): { user: IUser | null } => {
	const { userStore } = store;

	return {
		user: userStore.user,
	};
};
