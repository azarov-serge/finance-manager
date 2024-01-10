import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@ui-kit/typography/text/text';
import { Button } from '@ui-kit/buttons/button/button';
import EditIcon from '@assets/icons/pencil.inline.svg';

import { Styled } from './styled';
import { type CategoryManagerProps } from './types';

export const CategoryManager: React.FC<CategoryManagerProps> = (props) => {
	const { t } = useTranslation();
	const { category, onEditClick } = props;

	return (
		<Styled.Wrapper>
			<Styled.ControlsWrapper>
				<Button
					onClick={() => {
						onEditClick(category);
					}}
				>
					<EditIcon width={14} height={14} />
				</Button>
				<Styled.InfoWrapper>
					<p>{category.name}</p>
					<p>
						<Text size="small">{t('createdAt')}: </Text>
						<Text size="small">
							{`${category.createdAt.toLocaleDateString()} ${category.createdAt.toLocaleTimeString()}`}
						</Text>
					</p>
				</Styled.InfoWrapper>
			</Styled.ControlsWrapper>
		</Styled.Wrapper>
	);
};
