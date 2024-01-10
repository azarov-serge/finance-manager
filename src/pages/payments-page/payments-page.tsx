import React, { useEffect } from 'react';
import { Styled } from './styled';
import { useFetchList } from '@hooks/category';

import { Spinner } from '@ui-kit/spinner/spinner';
import { Categories } from './components/categories/categories';

export const PaymentsPage: React.FC = () => {
	const { isLoading, fetchData } = useFetchList();

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Styled.Wrapper>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<Categories />
					<Styled.TransactionWrapper></Styled.TransactionWrapper>
				</>
			)}
		</Styled.Wrapper>
	);
};
