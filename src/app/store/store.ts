import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { settingsReducer } from './common/settings/slice';

import { authApi } from './api/auth-api/auth-api';
import { categoryApi } from './api/category-api/category-api';

import { userReducer } from './user/slice';

const reducer = combineReducers({
	settings: settingsReducer,
	user: userReducer,
	[authApi.reducerPath]: authApi.reducer,
	[categoryApi.reducerPath]: categoryApi.reducer,
});

export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
			.concat(authApi.middleware)
			.concat(categoryApi.middleware),
});

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
