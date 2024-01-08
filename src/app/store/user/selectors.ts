import { createSelector } from '@reduxjs/toolkit';

import { type AppState } from '@store';
import { type UserState } from './types';

const selectSelf = (state: AppState): UserState => state.user;

const getIsAuth = createSelector(selectSelf, (state) => state.isAuth);

const getUser = createSelector(selectSelf, (state) => state.user);

export const userSelectors = {
	getIsAuth,
	getUser,
};
