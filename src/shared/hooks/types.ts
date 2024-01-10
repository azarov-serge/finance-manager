export interface UseBaseReturnType<T> {
	isLoading: boolean;
	data: T;

	error: string;
}

export interface UseFetchListReturnType<T> extends UseBaseReturnType<T> {
	fetchData: () => Promise<void>;
}

export interface UseCreateItemReturnType<T> extends UseBaseReturnType<T> {
	createItem: () => Promise<void>;
}

export interface UseUpdateItemReturnType<T> extends UseBaseReturnType<T> {
	updateItem: () => Promise<void>;
}

export interface UseDeleteItemReturnType
	extends Omit<UseBaseReturnType<undefined>, 'data'> {
	deleteItem: () => Promise<void>;
}
