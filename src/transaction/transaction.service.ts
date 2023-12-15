import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Transaction } from '@prisma/client';

@Injectable()
export class TransactionService {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: Omit<Transaction, 'id'>): Promise<Transaction> {
		const transaction = await this.prisma.transaction.create({ data: dto });

		return transaction;
	}

	async update(dto: Transaction): Promise<Transaction> {
		const transaction = await this.prisma.transaction.update({
			where: {
				id: dto.id,
			},
			data: dto,
		});

		return transaction;
	}

	async findById(id: string): Promise<Transaction> {
		const transaction = await this.prisma.transaction.findUnique({ where: { id } });

		return transaction;
	}

	async getList(userId: string): Promise<Transaction[]> {
		const transactions = await this.prisma.transaction.findMany({ where: { userId } });

		return transactions;
	}

	async delete(id: string): Promise<boolean> {
		await this.prisma.transaction.delete({ where: { id } });

		return true;
	}
}