import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SettingsState } from './types';

const initialState: SettingsState = {
	themeName: 'dark',
	language: 'en',
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setThemeName: (
			state,
			{ payload }: PayloadAction<SettingsState['themeName']>,
		) => {
			state.themeName = payload;
		},

		setLanguage: (
			state,
			{ payload }: PayloadAction<SettingsState['language']>,
		) => {
			state.language = payload;
		},

		clear: () => ({
			...initialState,
		}),
	},
});

export const { reducer: settingsReducer } = settingsSlice;

export const settingsActions = {
	...settingsSlice.actions,
};
