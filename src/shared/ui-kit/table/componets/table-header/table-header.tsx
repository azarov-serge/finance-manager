import React from 'react';

import UpIcon from '@ui-kit/assets/icons/arrow-up.inline.svg';
import DownIcon from '@ui-kit/assets/icons/arrow-down.inline.svg';

import { Tr } from '../../styled';

import { Styled } from './styled';
import { createHeader } from './utils';
import { TableFilter } from '../table-filter/table-filter';
import { type ColDef } from '../../types';
import { type TableHeaderProps } from './types';

const ICON_SIZE = 12;

export const TableHeader = <T,>(
	props: React.PropsWithChildren<TableHeaderProps<T>>,
): React.ReactNode => {
	const { columnDefs, sortItem, filters, onSortClick, onFilterClick } = props;

	return (
		<Tr>
			{columnDefs.map(
				({
					field,
					filter,
					headerName,
					headerRenderer,
					width,
					minWidth,
					maxWidth,
					sortable = false,
					getFilterValue,
				}) => {
					let header: ReturnType<
						Required<ColDef<T>>['headerRenderer']
					> = '';

					if (headerRenderer) {
						header = headerRenderer();
					} else if (headerName) {
						header = headerName;
					} else {
						header = createHeader(field);
					}

					return (
						<Styled.Th
							key={field}
							width={width}
							minWidth={minWidth}
							maxWidth={maxWidth}
						>
							<Styled.HeaderTitle
								sortable={sortable}
								name={field}
								onClick={sortable ? onSortClick : undefined}
							>
								{header}
							</Styled.HeaderTitle>
							{sortable && sortItem[field] && (
								<Styled.SortWrapper>
									{sortItem[field] === 'asc' ? (
										<UpIcon
											width={ICON_SIZE}
											height={ICON_SIZE}
										/>
									) : (
										<DownIcon
											width={ICON_SIZE}
											height={ICON_SIZE}
										/>
									)}
								</Styled.SortWrapper>
							)}
							{filter && filters[field] && (
								<TableFilter<T>
									field={field}
									filter={filters[field]}
									getFilterValue={getFilterValue}
									onFilterClick={onFilterClick}
								/>
							)}
						</Styled.Th>
					);
				},
			)}
		</Tr>
	);
};
