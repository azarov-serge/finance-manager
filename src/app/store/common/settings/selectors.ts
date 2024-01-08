import { createSelector } from '@reduxjs/toolkit';

import { type AppState } from '@store';
import { type SettingsState } from './types';

const selectSelf = (state: AppState): SettingsState => state.settings;

const getThemeName = createSelector(selectSelf, (state) => state.themeName);

const getLanguage = createSelector(selectSelf, (state) => state.language);

export const settingsSelectors = {
	getThemeName,
	getLanguage,
};
