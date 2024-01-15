export interface UseBaseReturnType<T> {
	isLoading: boolean;
	data: T;

	error: string;
}

export interface UseFetchListReturnType<T> extends UseBaseReturnType<T> {
	fetchData: () => Promise<void>;
}

export interface UseCreateItemReturnType<T, A> extends UseBaseReturnType<T> {
	createItem: (arg: A) => Promise<void>;
}

export interface UseUpdateItemReturnType<T, A> extends UseBaseReturnType<T> {
	updateItem: (arg: A) => Promise<void>;
}

export interface UseDeleteItemReturnType
	extends Omit<UseBaseReturnType<undefined>, 'data'> {
	deleteItem: (ids: string[]) => Promise<void>;
}
