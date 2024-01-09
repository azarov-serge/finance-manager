import React, { type ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Styled } from './styled';
import { Title } from '@ui-kit/typography/title/title';
import {
	useGetList,
	useCreateItem,
	useUpdateItem,
	useDeleteItem,
} from '@hooks/categories';

import { Spinner } from '@ui-kit/spinner/spinner';
import { Button } from '@ui-kit/buttons/button/button';

export const PaymentsPage: React.FC = () => {
	const { t } = useTranslation();
	const [categoryName, setCategoryName] = useState('');

	const { isLoading, data: categories } = useGetList();
	const { createItem } = useCreateItem();
	const { updateItem } = useUpdateItem();
	const { deleteItem } = useDeleteItem();

	const handleCategoryNameChange = (
		evt: ChangeEvent<HTMLInputElement>,
	): void => {
		setCategoryName(evt.target.value);
	};

	return (
		<Styled.Wrapper>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<Styled.CateegoriesWrapper>
						<Title symantic align="center">
							{t('categories')}
						</Title>
						<p>
							<input
								type="text"
								onChange={handleCategoryNameChange}
							/>
							<Button
								kind="primary"
								onClick={() => {
									createItem({ name: categoryName });
								}}
							>
								Add
							</Button>

							{Boolean(categories?.length) && (
								<Button
									kind="primary"
									onClick={() => {
										if (!categories?.length) {
											return;
										}

										const category = categories[0];
										updateItem(
											category.copyWith({
												name: categoryName,
											}),
										);
									}}
								>
									Update first
								</Button>
							)}

							{Boolean(categories?.length) && (
								<Button
									kind="primary"
									onClick={() => {
										if (!categories?.length) {
											return;
										}

										const category =
											categories[categories.length - 1];
										deleteItem(category);
									}}
								>
									Delete last
								</Button>
							)}
						</p>
						{categories && (
							<Styled.CategoriesList>
								{categories.map((category) => (
									<Styled.CategoriesItem key={category.id}>
										<Button kind="ghost">
											{category.name}
										</Button>
									</Styled.CategoriesItem>
								))}
							</Styled.CategoriesList>
						)}
					</Styled.CateegoriesWrapper>
					<Styled.TransactionWrapper></Styled.TransactionWrapper>
				</>
			)}
		</Styled.Wrapper>
	);
};
