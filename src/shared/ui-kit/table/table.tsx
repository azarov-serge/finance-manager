import React from 'react';

import { TableHeader } from './componets/table-header/table-header';
import { Styled } from './styled';
import { type TableProps } from './types';
import { TableContent } from './componets/table-content/table-content';
import { useTable } from './componets/hooks/use-table';

export const Table = <T,>(
	props: React.PropsWithChildren<TableProps<T>>,
): React.ReactNode => {
	const { columnDefs, getRowId, onRowClick } = props;

	const { rows, sortItem, filters, onSortClick, onFilterClick } =
		useTable(props);

	return (
		<Styled.Table>
			<thead>
				<TableHeader<T>
					columnDefs={columnDefs}
					sortItem={sortItem}
					filters={filters}
					onSortClick={onSortClick}
					onFilterClick={onFilterClick}
				/>
			</thead>
			<tbody>
				<TableContent<T>
					rows={rows}
					columnDefs={columnDefs}
					getRowId={getRowId}
					onRowClick={onRowClick}
				/>
			</tbody>
		</Styled.Table>
	);
};
