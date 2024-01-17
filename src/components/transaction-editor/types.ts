import { type TransactionEntity } from '@entities';

export interface TransactionEditorProps {
	transaction?: TransactionEntity;
	onOkClick: (transaction: TransactionEntity) => Promise<void>;
	onCloseClick: () => void;
}
