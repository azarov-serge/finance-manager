import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDate } from '@utils/date';
import { type TransactionEntity } from '@entities';
import { type ColDef } from '@ui-kit/table/types';

export const useTransactionsColumnDefs = (): Array<
	ColDef<TransactionEntity>
> => {
	const { t } = useTranslation();

	const columnDefs: Array<ColDef<TransactionEntity>> = [
		{
			field: 'id',
			headerName: '#',
			width: 50,
			cellRenderer: ({ index = 0 }) => index + 1,
		},
		{
			field: 'name',
			headerRenderer: () => t('transactions'),
			sortable: true,
			filter: true,
		},
		{
			field: 'price',
			minWidth: 50,
			maxWidth: 150,
			justifyContent: 'end',
			sortable: true,
			filter: true,
			cellRenderer: ({ data }) => data.price.toFixed(2),
		},
		{
			field: 'price',
			headerRenderer: () => t('price'),
			minWidth: 50,
			maxWidth: 150,
			justifyContent: 'end',
			sortable: true,
			filter: true,
			cellRenderer: ({ data }) => data.price.toFixed(2),
		},
		{
			field: 'category',
			headerRenderer: () => t('category'),
			getFilterValue: ({ data }) => data.category?.name || '',
			minWidth: 50,
			maxWidth: 150,
			justifyContent: 'end',
			sortable: true,
			filter: true,
			cellRenderer: ({ data }) => data.category?.name || '',
		},
		{
			field: 'createdAt',
			headerRenderer: () => t('createdAt'),
			sortable: true,
			justifyContent: 'center',
			minWidth: 100,
			maxWidth: 150,
			cellRenderer: ({ data }) => formatDate(data.createdAt),
		},
		{
			field: '',
			justifyContent: 'center',
			minWidth: 100,
			maxWidth: 150,
			cellRenderer: () => <div>{`tools`}</div>,
		},
	];

	return columnDefs;
};
