import { action, makeObservable, observable } from 'mobx';
import qs from 'query-string';

import { delay } from '@utils';
import { axiosInstance } from '../axios-instance';
import {
	RequesArgs,
	RESTMethod,
	type Status,
	type StatusData,
	type Resource,
} from './types';

const statusTemplate = {
	isFetching: false,
	isFetched: false,
	error: null,
};

const getInitialStatus = (): Status => {
	return { ...statusTemplate };
};

export class RESTService {
	@observable.deep
	status: Record<string, Status> = {};

	getStatus(resource: Resource): Status {
		if (this.status[resource.name] === undefined) {
			this.status[resource.name] = getInitialStatus();
		}

		return this.status[resource.name];
	}

	constructor(private readonly config: { url: string; useMock?: boolean }) {
		makeObservable(this);
		this.getStatus = this.getStatus.bind(this);
	}

	@action.bound
	async request<R>(args: RequesArgs): Promise<StatusData<R>> {
		const {
			resource,
			params = {},
			data = null,
			fetch,
			mock,
			headers,
			fullResponse,
		} = args;

		const queryParams = qs.stringify(params);

		const url =
			this.config.url +
			resource.url +
			`${queryParams ? '?' + queryParams : ''}`;

		const method = resource.method;

		if (this.status[resource.name] === undefined) {
			this.status[resource.name] = getInitialStatus();
		}

		const statusRef = this.status[resource.name];
		statusRef.isFetching = true;
		let responseData = null;

		try {
			if (this.config.useMock && mock) {
				await delay(mock?.delay ?? 300);
				responseData = mock.data as R;
			} else {
				const request = fetch
					? fetch(resource, {
							path: url,
							body: data,
							baseUrl: '',
							headers,
					  })
					: method === 'delete' && data
					? axiosInstance.delete(url, {
							data,
							headers,
					  })
					: axiosInstance[method](url, data, {
							headers,
					  });

				const response = await request;

				if (fullResponse) {
					responseData = response as R;
				} else {
					responseData = response.data as R;
				}
			}
		} catch (error) {
			statusRef.error = error as Error;
		} finally {
			statusRef.isFetched = true;
			statusRef.isFetching = false;
		}

		return { status: statusRef, response: responseData };
	}

	@action.bound
	reset(resource: Resource, method?: RESTMethod): void {
		if (method) {
			this.status[resource.name] = {
				isFetching: false,
				isFetched: false,
				error: null,
			};

			return;
		}

		this.status[resource.name] = getInitialStatus();
	}
}
