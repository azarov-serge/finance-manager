import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserState } from './types';

const initialState: UserState = {
	isAuth: null,
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuth: (state, { payload }: PayloadAction<UserState['isAuth']>) => {
			state.isAuth = payload;
		},

		setUser: (state, { payload }: PayloadAction<UserState['user']>) => {
			state.user = payload;
		},

		clear: () => ({
			...initialState,
		}),
	},
});

export const { reducer: userReducer } = userSlice;

export const userActions = {
	...userSlice.actions,
};
