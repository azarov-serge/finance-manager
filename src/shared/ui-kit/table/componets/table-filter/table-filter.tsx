import React from 'react';

import FilterIcon from '@ui-kit/assets/icons/funnel.inline.svg';

import { Styled } from './styled';
import { useTableFilter } from './hooks/use-table-filter';
import { type TableFilterProps } from './types';

const ICON_SIZE = 11;

export const TableFilter = <T,>(
	props: React.PropsWithChildren<TableFilterProps<T>>,
): React.ReactNode => {
	const { field, filter } = props;
	const { isSelectAll, handleFilterClick, handleSelectAllFilterClick } =
		useTableFilter<T>(props);

	return (
		<Styled.FilterDropdownButton
			isSelectAll={isSelectAll}
			isCloseByItemClick={false}
			withIcon={false}
			menu={
				<Styled.FilterContent>
					<Styled.FilterList>
						<Styled.FilterListItemSelectAll>
							<input
								id="accordion-grid-filter_select-all"
								type="checkbox"
								checked={isSelectAll}
								onChange={handleSelectAllFilterClick}
							/>
							<label
								className="is-bold-true"
								htmlFor="accordion-grid-filter_select-all"
							>
								Выделить все
							</label>
						</Styled.FilterListItemSelectAll>
					</Styled.FilterList>

					<Styled.FilterList>
						{Object.keys(filter)
							.sort((a, b) => (a > b ? 1 : -1))
							.map((key) => {
								return (
									<Styled.FilterListItem key={key}>
										<input
											id={key}
											name={key}
											data-field={field}
											type="checkbox"
											checked={filter[key]}
											onChange={handleFilterClick}
										/>
										<label htmlFor={key}>{key}</label>
									</Styled.FilterListItem>
								);
							})}
					</Styled.FilterList>
				</Styled.FilterContent>
			}
		>
			<FilterIcon width={ICON_SIZE} height={ICON_SIZE} />
		</Styled.FilterDropdownButton>
	);
};
