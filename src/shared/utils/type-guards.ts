import type { ThemeName } from '@emotion/react';

import { CategoryEntity, TransactionEntity, UserEntity } from '@entities';
import { ResponseError } from './response-error';

// #region common
export const isString = (value: unknown): value is string =>
	typeof value === 'string';

export const isNumber = (value: unknown): value is number =>
	typeof value === 'number';

export const isBoolean = (value: unknown): value is boolean =>
	typeof value === 'boolean';

export const isDate = (value: unknown): value is Date => value instanceof Date;

export const isObject = (value: unknown): value is object =>
	typeof value === 'object';
// #endregion

export const isThemeName = (value: unknown): value is ThemeName =>
	isString(value) ? ['dark', 'light'].includes(value) : false;

export const isResponseError = (value: unknown): value is ResponseError =>
	value instanceof ResponseError;

export const isError = (value: unknown): value is Error =>
	value instanceof Error;

// #region entities
export const isUser = (value: unknown): value is IUser =>
	value instanceof UserEntity;

export const isCategory = (value: unknown): value is ICategory =>
	value instanceof CategoryEntity;

export const isTransaction = (value: unknown): value is ITransaction =>
	value instanceof TransactionEntity;
// #endregion
