import { type CategoryEntity } from '@entities';

export interface CategoryManagerProps {
	category: CategoryEntity;
	onEditClick: (category: CategoryEntity) => void | Promise<void>;
}
