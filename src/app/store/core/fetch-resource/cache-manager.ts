import { makeAutoObservable } from 'mobx';

export interface CacheManagerConfig {
	id: string;
	persist?: boolean;
}

export class CacheManager {
	constructor(private readonly config: CacheManagerConfig) {
		makeAutoObservable(this);
	}

	read(): void {}
	write(): void {}
}
