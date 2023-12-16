import {
	Body,
	Controller,
	Delete,
	Get,
	InternalServerErrorException,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { Category } from '@prisma/client';

import { AccessTokenGuard } from '@common/guards/access-token.guard';

import { CategoryService } from './category.service';
import { CATEGORY_NOT_FOUND } from './category.constants';

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@UseGuards(AccessTokenGuard)
	@Post('create')
	async create(@Body() dto: Omit<Category, 'id'>): Promise<Category> {
		try {
			const category = await this.categoryService.create(dto);

			return category;
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@UseGuards(AccessTokenGuard)
	@Patch('update')
	async update(@Body() dto: Category): Promise<Category> {
		try {
			const category = this.categoryService.findById(dto.id);

			if (!category) {
				throw new NotFoundException(CATEGORY_NOT_FOUND);
			}

			return await this.categoryService.update(dto);
		} catch (error: any) {
			if (error instanceof NotFoundException) {
				throw new NotFoundException(CATEGORY_NOT_FOUND);
			}

			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@UseGuards(AccessTokenGuard)
	@Get(':id')
	async get(@Param('id') id: string): Promise<Category> {
		try {
			const category = this.categoryService.findById(id);

			if (!category) {
				throw new NotFoundException(CATEGORY_NOT_FOUND);
			}

			return category;
		} catch (error: any) {
			if (error instanceof NotFoundException) {
				throw new NotFoundException(CATEGORY_NOT_FOUND);
			}

			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@UseGuards(AccessTokenGuard)
	@Get('get-list/:userId')
	async getList(@Param('userId') userId: string): Promise<Category[]> {
		try {
			const categorys = await this.categoryService.getList(userId);

			return categorys;
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@UseGuards(AccessTokenGuard)
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<boolean> {
		try {
			const isDeleted = await this.categoryService.delete(id);

			return isDeleted;
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}
}
