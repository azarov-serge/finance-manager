import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@ui-kit/buttons/button/button';
import { useFetchList } from '@hooks/category';

import { useTransactionEditor } from './hooks/use-transaction-editor';
import { Styled } from './styled';
import { type TransactionEditorProps } from './types';
import { TransactionEntity } from '@entities';

export const TransactionEditor: React.FC<TransactionEditorProps> = (props) => {
	const { t } = useTranslation();
	const { formik } = useTransactionEditor(props);
	const { data: categories } = useFetchList();

	return (
		<Styled.Form onSubmit={formik.handleSubmit}>
			<input
				name="name"
				required
				placeholder={t('transaction')}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.name}
				autoComplete="off"
			/>

			<Styled.Row>
				<input
					required
					name="price"
					placeholder={t('price')}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.price}
					autoComplete="off"
				/>
			</Styled.Row>

			<Styled.Row>
				<select
					value={
						formik.values.category
							? formik.values.category.id
							: 'null'
					}
					onChange={(evt) => {
						const category = categories?.find(
							(item) => item.id === evt.target.value,
						);

						formik.setFieldValue('category', category ?? null);
					}}
				>
					<option value={'null'}>--</option>
					{categories?.map((category) => {
						return (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						);
					})}
				</select>
			</Styled.Row>

			<Button
				type="submit"
				kind="primary"
				onClick={() => {
					props.onOkClick(TransactionEntity.fromJson(formik.values));
				}}
			>
				{t('submit')}
			</Button>
			<Button onClick={props.onCloseClick}>{t('cancel')}</Button>
		</Styled.Form>
	);
};
