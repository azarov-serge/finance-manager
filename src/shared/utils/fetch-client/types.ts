export interface StorageIndex<I> {
	index: I;
	key: string;
	unique?: boolean;
}

export interface IndexedDbConfig<S, I> {
	dbName: string;
	dbVersion?: number | undefined;
	storageNames: S[];
	storeNameToIndexes: Record<string, Array<StorageIndex<I>>>;
}

export interface SelectParams<I> {
	key?: I | 'id';
	value?: IDBKeyRange | any;
	count?: number;
	orderBy?: 'asc' | 'desc';
}

type Id = number;

export interface User {
	id: Id;
	createdAt: Date;
	name: string;
	password: string;
	accessToken: string;
	sessionEndDate: Date;
}

type UserKey = keyof User;

export type StorageIndexName = `fmUser${Capitalize<
	Extract<UserKey, 'id' | 'name'>
>}`;
