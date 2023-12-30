export type RESTMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface Status {
	isFetching: boolean;
	isFetched: boolean;
	error: null | Error;
}

export interface StatusData<R> {
	status: Status;
	response: R | null;
}

export interface Resource {
	url: string;
	method: RESTMethod;
	name: string;
}

export interface RequesArgs {
	resource: Resource;
	params?: object;
	data?: any;
	fetch?: any;
	mock?: { data: any; delay?: number };
	headers?: object;
	fullResponse?: boolean;
}
