export class CategoryEntity implements ICategory {
	id: ICategory['id'];
	createdAt: ICategory['createdAt'];
	name: ICategory['name'];

	constructor(category: ICategory) {
		this.id = category.id;
		this.createdAt = category.createdAt;
		this.name = category.name;
	}

	toJson = (): Record<string, string> => {
		return {
			id: this.id,
			createdAt: this.createdAt.toISOString(),
			name: this.name,
		};
	};

	copyWith = (category: Partial<ICategory>): CategoryEntity => {
		return new CategoryEntity({ ...this, ...category });
	};

	static fromJson = (
		json: Record<string, string> | ICategory,
	): CategoryEntity => {
		return new CategoryEntity({
			id: json.id,
			createdAt: new Date(json.createdAt),
			name: json.name,
		});
	};

	static createEmpty = (): CategoryEntity => {
		return new CategoryEntity({
			id: '',
			createdAt: new Date(),
			name: '',
		});
	};
}
