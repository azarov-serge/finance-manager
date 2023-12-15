import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: Omit<Category, 'id'>): Promise<Category> {
		const category = await this.prisma.category.create({ data: dto });

		return category;
	}

	async update(dto: Category): Promise<Category> {
		const category = await this.prisma.category.update({
			where: {
				id: dto.id,
			},
			data: dto,
		});

		return category;
	}

	async findById(id: string): Promise<Category> {
		const category = await this.prisma.category.findUnique({ where: { id } });

		return category;
	}

	async getList(userId: string): Promise<Category[]> {
		const categorys = await this.prisma.category.findMany({ where: { userId } });

		return categorys;
	}

	async delete(id: string): Promise<boolean> {
		await this.prisma.category.delete({ where: { id } });

		return true;
	}
}
