import { makeAutoObservable } from 'mobx';

export class FetchStore {
	loading: boolean = false;
	error = '';

	constructor() {
		makeAutoObservable(this);
	}

	reset(): void {
		this.loading = false;
		this.error = '';
	}
}
