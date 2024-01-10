import { type CategoryEntity } from '@entities';

export interface CategoryEditorProps {
	category?: CategoryEntity;
	onOkClick: (category: CategoryEntity) => void | Promise<void>;
	onCloseClick: () => void | Promise<void>;
	onDeleteClick?: (category: CategoryEntity) => void | Promise<void>;
}
