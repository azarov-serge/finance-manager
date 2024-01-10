import React, { type ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CategoryEntity } from '@entities';

import { Button } from '@ui-kit/buttons/button/button';
import OkIcon from '@assets/icons/checkmark-done.inline.svg';
import CloseIcon from '@assets/icons/close.inline.svg';
import DeleteIcon from '@assets/icons/trash.inline.svg';

import { Styled } from './styled';
import { type CategoryEditorProps } from './types';

export const CategoryEditor: React.FC<CategoryEditorProps> = (props) => {
	const { onOkClick, onCloseClick, onDeleteClick } = props;
	const { t } = useTranslation();
	const [category, setCategory] = useState(
		props.category
			? CategoryEntity.fromJson(props.category.toJson())
			: CategoryEntity.createEmpty(),
	);

	const handleNameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
		setCategory(category.copyWith({ name: evt.target.value }));
	};

	return (
		<Styled.Wrapper>
			<Button
				onClick={() => {
					onCloseClick();
					onOkClick(category);
				}}
			>
				<OkIcon width={14} height={14} />
			</Button>
			<Button
				onClick={() => {
					onCloseClick();
				}}
			>
				<CloseIcon width={14} height={14} />
			</Button>
			<Styled.NameInput
				placeholder={t('category')}
				value={category.name}
				withRemoveButton={Boolean(onDeleteClick)}
				onChange={handleNameChange}
			/>
			{onDeleteClick && (
				<Button
					kind="danger"
					onClick={() => {
						onCloseClick();
						onDeleteClick(category);
					}}
				>
					<DeleteIcon width={14} height={14} />
				</Button>
			)}
		</Styled.Wrapper>
	);
};
