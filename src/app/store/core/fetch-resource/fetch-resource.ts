import { computed, makeObservable } from 'mobx';

import { CacheManager } from './cache-manager';
import { RESTService } from './rest-service';
import { type Status } from './types';

export class FetchResource {
	public rest: RESTService;
	protected cache: CacheManager;

	constructor(private readonly config: { url: string; useMock?: boolean }) {
		makeObservable(this);

		this.rest = new RESTService({
			url: this.config.url,
			useMock: this.config?.useMock ?? false,
		});
		this.cache = new CacheManager({ id: this.config.url });
	}

	@computed
	get status(): Record<string, Status> {
		return this.rest.status;
	}
}
