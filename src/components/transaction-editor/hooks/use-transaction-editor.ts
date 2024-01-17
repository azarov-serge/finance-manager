import { useEffect } from 'react';

import { type FormikProps, useFormik } from 'formik';

import { type TransactionEditorProps } from '../types';
import { TransactionEntity } from '@entities';

interface UseSignUp {
	formik: FormikProps<ITransaction>;
}

export const useTransactionEditor = (
	props: TransactionEditorProps,
): UseSignUp => {
	const transaction = props?.transaction || TransactionEntity.createEmpty();

	const formik: FormikProps<ITransaction> = useFormik<ITransaction>({
		initialValues: {
			id: transaction.id,
			name: transaction.name,
			createdAt: transaction.createdAt,
			category: transaction.category,
			price: transaction.price,
		},
		onSubmit: () => {},
	});

	useEffect(() => {
		return () => {
			formik.resetForm();
		};
	}, []);

	return {
		formik,
	};
};
