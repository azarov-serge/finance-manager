import React, { useEffect } from 'react';
import { Styled } from './styled';
import { useFetchList as useFetchCategoriesList } from '@hooks/category';
import { useFetchList as useFetchTransactionsList } from '@hooks/transaction';
import { Spinner } from '@ui-kit/spinner/spinner';

import { Categories } from './components/categories/categories';
import { Transactions } from './components/transactions/transactions';

export const PaymentsPage: React.FC = () => {
	const { isLoading: isCategoriesLoading, fetchData: fetchCategories } =
		useFetchCategoriesList();

	const {
		isLoading: isTransactionLoading,
		fetchData: fetchTransactionsList,
	} = useFetchTransactionsList();

	useEffect(() => {
		fetchCategories();
		fetchTransactionsList();
	}, []);

	return (
		<Styled.Wrapper>
			{isCategoriesLoading || isTransactionLoading ? (
				<Spinner />
			) : (
				<>
					<Categories />
					<Transactions />
				</>
			)}
		</Styled.Wrapper>
	);
};
