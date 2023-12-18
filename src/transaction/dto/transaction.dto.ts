import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class TransactionDto {
	@IsNotEmpty()
	@IsString()
	id: string;

	@IsNotEmpty()
	@IsString()
	userId: string;

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsNumber()
	price: number;

	@IsOptional()
	@IsString()
	categoryId: string | null;
}

export class NewTransactionDto {
	@IsNotEmpty()
	@IsString()
	userId: string;

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsNumber()
	price: number;

	@IsOptional()
	@IsString()
	categoryId: string | null;
}
