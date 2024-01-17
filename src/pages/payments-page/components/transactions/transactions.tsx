import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

import { useCreateItem, useFetchList, useUpdateItem } from '@hooks/transaction';
import { Button } from '@ui-kit/buttons/button/button';
import { Modal } from '@ui-kit/modal/modal';
import { Table } from '@ui-kit/table/table';
import { TransactionEditor } from '@components/transaction-editor/transaction-editor';

import AddIcon from '@assets/icons/add.inline.svg';

import { TransactionEntity } from '@entities';

import { Styled } from './styled';
import { useTransactionsColumnDefs } from './hooks/use-transactions-column-defs';

const getRowId = (row: TransactionEntity): string => row.id;

export const Transactions: React.FC = () => {
	// const { t } = useTranslation();
	const [transaction, setTransacrion] = useState<TransactionEntity | null>(
		null,
	);

	const { data: transactions } = useFetchList();
	const columnDefs = useTransactionsColumnDefs({ setTransacrion });
	const { createItem } = useCreateItem();
	const { updateItem } = useUpdateItem();

	return (
		<Styled.Wrapper>
			<Styled.SettingsButtonWrapper>
				<Button
					onClick={() => {
						setTransacrion(TransactionEntity.createEmpty());
					}}
				>
					<AddIcon width={14} height={14} />
				</Button>
			</Styled.SettingsButtonWrapper>
			<Table<TransactionEntity>
				rows={transactions ?? []}
				getRowId={getRowId}
				columnDefs={columnDefs}
			/>
			<Modal isOpened={transaction !== null}>
				{transaction !== null && (
					<TransactionEditor
						transaction={transaction}
						onOkClick={transaction.id ? updateItem : createItem}
						onCloseClick={() => {
							setTransacrion(null);
						}}
					/>
				)}
			</Modal>
		</Styled.Wrapper>
	);
};
