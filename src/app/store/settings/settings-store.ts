import type { ThemeName } from '@emotion/react';
import { makeAutoObservable } from 'mobx';

class SettingsStore {
	themeName: ThemeName = 'dark';
	language = 'en';

	constructor() {
		makeAutoObservable(this);
	}

	setLanguage(language: string): void {
		this.language = language;
	}

	reset(): void {
		this.themeName = 'dark';
		this.language = 'en';
	}
}

export const settingsStore = new SettingsStore();
