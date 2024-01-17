import { isCategory, isNumber, isObject, isString } from '@utils';
import { CategoryEntity } from './category-entity';

export class TransactionEntity implements ITransaction {
	id: ITransaction['id'];
	createdAt: ITransaction['createdAt'];
	name: ITransaction['name'];
	price: ITransaction['price'];
	category: ITransaction['category'];

	constructor(transaction: ITransaction) {
		this.id = transaction.id ?? '';
		this.createdAt = transaction.createdAt ?? new Date();
		this.name = transaction.name ?? '';
		this.price = transaction.price ?? 0;
		this.category = transaction.category ?? null;
	}

	toJson = (): Record<string, unknown> => {
		return {
			id: this.id,
			createdAt: this.createdAt.toISOString(),
			name: this.name,
			price: this.price,
			category: isCategory(this.category)
				? (this.category as CategoryEntity).toJson
				: null,
		};
	};

	copyWith = (transaction: Partial<ITransaction>): TransactionEntity => {
		return new TransactionEntity({ ...this, ...transaction });
	};

	static createEmpty = (): TransactionEntity => {
		return new TransactionEntity({
			id: '',
			name: '',
			createdAt: new Date(),
			price: 0,
			category: null,
		});
	};

	static fromJson = (
		json: Record<string, string | Record<string, string>> | ITransaction,
	): TransactionEntity => {
		let category = null;

		if (json.category && json.category instanceof CategoryEntity) {
			category = json.category;
		} else if (json.category && isObject(json.category)) {
			category = CategoryEntity.fromJson(json.category);
		}

		return new TransactionEntity({
			id: isString(json.id) ? json.id : Date.now().toString(),
			createdAt: isString(json.createdAt)
				? new Date(json.createdAt)
				: new Date(),
			name: isString(json.name)
				? json.name
				: 'Error json property: "name"',
			price:
				isNumber(json.price) || isString(json.price)
					? Number(json.price)
					: 0,
			category,
		});
	};
}
