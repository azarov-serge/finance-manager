import React, { type ChangeEvent, useState } from 'react';

import { CategoryEditor } from '@components/category-editor/category-editor';
import { useFetchList, useUpdateItem, useDeleteItem } from '@hooks/category';

import { Styled } from './styled';
import { CategoryManager } from '../category-manager/category-manager';

export const CategoriesManager: React.FC = () => {
	const { data: categories } = useFetchList();
	const [searchText, setSearchText] = useState('');
	const [isEditMode, setIsEditMode] = useState<
		Record<string, boolean | undefined>
	>({});
	const { updateItem } = useUpdateItem();
	const { deleteItem } = useDeleteItem();

	const handleSearchTextChange = (
		evt: ChangeEvent<HTMLInputElement>,
	): void => {
		setSearchText(evt.target.value.toLowerCase());
	};

	const renderedCategories = !searchText
		? categories || []
		: (categories || [])
				.slice()
				.filter((category) =>
					category.name.toLowerCase().includes(searchText),
				);

	return (
		<Styled.Wrapper>
			<Styled.SearchInput onChange={handleSearchTextChange} />
			<Styled.ListWrapper>
				{Boolean(renderedCategories.length) && (
					<Styled.List>
						{renderedCategories.map((category, index) => {
							return (
								<Styled.ListItem key={category.id}>
									{isEditMode[category.id] === true ? (
										<CategoryEditor
											category={category}
											onOkClick={(category) => {
												updateItem(category);
											}}
											onCloseClick={() => {
												setIsEditMode((prev) => {
													const isEditMode = {
														...prev,
													};
													delete isEditMode[
														// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
														category.id
													];

													return isEditMode;
												});
											}}
											onDeleteClick={() => {
												deleteItem([category.id]);
											}}
										/>
									) : (
										<CategoryManager
											category={category}
											onEditClick={() => {
												setIsEditMode((prev) => ({
													...prev,
													[category.id]: true,
												}));
											}}
										/>
									)}
								</Styled.ListItem>
							);
						})}
					</Styled.List>
				)}
			</Styled.ListWrapper>
		</Styled.Wrapper>
	);
};
