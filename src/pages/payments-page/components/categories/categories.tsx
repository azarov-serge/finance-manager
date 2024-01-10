import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCreateItem, useFetchList } from '@hooks/category';
import { Button } from '@ui-kit/buttons/button/button';
import { Modal } from '@ui-kit/modal/modal';
import { CategoryEditor } from '@components/category-editor/category-editor';

import SettingsIcon from '@assets/icons/settings.inline.svg';
import AddIcon from '@assets/icons/add.inline.svg';

import { CategoriesManager } from '../categories-manager/categories-manager';
import { Styled } from './styled';

export const Categories: React.FC = () => {
	const { t } = useTranslation();
	const { data: categories } = useFetchList();
	const [isCategoriesManagerModalOpened, setIsCategoriesManagerModalOpened] =
		useState(false);

	const [isAddCategoryModalOpened, setIsAddCategoryModalOpened] =
		useState(false);

	const { createItem } = useCreateItem();

	return (
		<Styled.Wrapper>
			<Styled.ListWrapper>
				<Styled.SettingsButtonWrapper>
					<Button
						onClick={() => {
							setIsCategoriesManagerModalOpened(
								!isCategoriesManagerModalOpened,
							);
						}}
					>
						<SettingsIcon width={14} height={14} />
					</Button>
				</Styled.SettingsButtonWrapper>
				<Styled.List>
					{categories?.length ? (
						categories?.map((category) => (
							<Styled.ListItem key={category.id}>
								<Button>{category.name}</Button>
							</Styled.ListItem>
						))
					) : (
						<Styled.ListItem>
							<p>{t('categories')}</p>
						</Styled.ListItem>
					)}
					<Styled.ListItem>
						<Button
							onClick={() => {
								setIsAddCategoryModalOpened(
									!isAddCategoryModalOpened,
								);
							}}
						>
							<AddIcon width={14} height={14} />
						</Button>
					</Styled.ListItem>
				</Styled.List>
			</Styled.ListWrapper>

			<Modal
				isOpened={isCategoriesManagerModalOpened}
				onCloseClick={() => {
					setIsCategoriesManagerModalOpened(false);
				}}
			>
				<CategoriesManager />
			</Modal>
			<Modal isOpened={isAddCategoryModalOpened}>
				<CategoryEditor
					onOkClick={createItem}
					onCloseClick={() => {
						setIsAddCategoryModalOpened(false);
					}}
				/>
			</Modal>
		</Styled.Wrapper>
	);
};
