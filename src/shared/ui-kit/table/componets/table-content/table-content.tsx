import React from 'react';

import { isObject } from '@utils';

import { Tr } from '../../styled';
import { Styled } from './styled';
import { type TableContentProps } from './types';
import { type ColDef } from '../../types';

export const TableContent = <T,>(
	props: React.PropsWithChildren<TableContentProps<T>>,
): React.ReactNode => {
	const { columnDefs, rows, getRowId } = props;

	return (
		<>
			{rows.map((row, index) => {
				const key = getRowId(row);

				return (
					<Tr key={key}>
						{columnDefs.map(
							({ field, cellRenderer, filter, ...rest }) => {
								let cell: ReturnType<
									Required<ColDef<T>>['cellRenderer']
								> = null;

								if (cellRenderer) {
									cell = cellRenderer({ data: row, index });
								} else {
									cell = isObject(row)
										? (row as any)[field] ?? null
										: null;
								}

								return (
									<Styled.Td
										key={`${key}-${field}`}
										{...rest}
									>
										{cell}
									</Styled.Td>
								);
							},
						)}
					</Tr>
				);
			})}
		</>
	);
};
