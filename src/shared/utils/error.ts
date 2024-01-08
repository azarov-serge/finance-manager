import { isError, isResponseError, isString } from './type-guards';

export const getError = (value: unknown, isFull = false): string => {
	if (!value) {
		return '';
	}

	if (isString(value)) {
		return value;
	}

	if (isError(value)) {
		return value.message;
	}

	if (isResponseError(value)) {
		return isFull ? value.fullMessage : value.message;
	}

	return '';
};
