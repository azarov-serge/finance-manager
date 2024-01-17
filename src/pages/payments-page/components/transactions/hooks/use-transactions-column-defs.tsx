import React from 'react';
import { useTranslation } from 'react-i18next';

import EditIcon from '@assets/icons/pencil.inline.svg';
import DeleteIcon from '@assets/icons/trash.inline.svg';

import { Button } from '@ui-kit/buttons/button/button';
import { useDeleteItem } from '@hooks/transaction';

import { formatDate } from '@utils/date';
import { type TransactionEntity } from '@entities';
import { type ColDef } from '@ui-kit/table/types';
import { Styled } from '../styled';

export const useTransactionsColumnDefs = (props: {
	setTransacrion: React.Dispatch<
		React.SetStateAction<TransactionEntity | null>
	>;
}): Array<ColDef<TransactionEntity>> => {
	const { t } = useTranslation();
	const { deleteItem } = useDeleteItem();

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
			cellRenderer: ({ data }) => {
				return (
					<Styled.SettingsButtonWrapper>
						<Button
							onClick={() => {
								props.setTransacrion(data);
							}}
						>
							<EditIcon width={14} height={14} />
						</Button>

						<Button
							kind="danger"
							onClick={() => {
								deleteItem([data.id]);
							}}
						>
							<DeleteIcon width={14} height={14} />
						</Button>
					</Styled.SettingsButtonWrapper>
				);
			},
		},
	];

	return columnDefs;
};
