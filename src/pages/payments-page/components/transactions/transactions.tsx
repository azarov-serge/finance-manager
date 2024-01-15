import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

import { useCreateItem, useFetchList } from '@hooks/transaction';
import { Button } from '@ui-kit/buttons/button/button';
import { Modal } from '@ui-kit/modal/modal';
import { Table } from '@ui-kit/table/table';
// import { TransactionEditor } from '@components/transaction-editor/transaction-editor';

import AddIcon from '@assets/icons/add.inline.svg';

// import { CategoriesManager } from '../transactions-manager/transactions-manager';
import { type TransactionEntity } from '@entities';

import { Styled } from './styled';
import { useTransactionsColumnDefs } from './hooks/use-transactions-column-defs';

const getRowId = (row: TransactionEntity): string => row.id;

export const Transactions: React.FC = () => {
	// const { t } = useTranslation();
	const { data: transactions } = useFetchList();
	const columnDefs = useTransactionsColumnDefs();
	const [isCategoriesManagerModalOpened, setIsCategoriesManagerModalOpened] =
		useState(false);

	const [isAddTransactionModalOpened, setIsAddTransactionModalOpened] =
		useState(false);

	const { createItem } = useCreateItem();

	return (
		<Styled.Wrapper>
			<Styled.SettingsButtonWrapper>
				<Button
					onClick={() => {
						setIsAddTransactionModalOpened(
							!isAddTransactionModalOpened,
						);
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

			<Modal
				isOpened={isCategoriesManagerModalOpened}
				onCloseClick={() => {
					setIsCategoriesManagerModalOpened(false);
				}}
			>
				{/* <CategoriesManager /> */}
			</Modal>
			<Modal isOpened={isAddTransactionModalOpened}>
				{/* <TransactionEditor
					onOkClick={createItem}
					onCloseClick={() => {
						setIsAddTransactionModalOpened(false);
					}}
				/> */}
			</Modal>
		</Styled.Wrapper>
	);
};
