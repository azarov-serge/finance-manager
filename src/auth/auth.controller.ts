import {
	Body,
	Controller,
	Get,
	Post,
	UseGuards,
	Req,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';

import { User } from '@prisma/client';

import { AccessTokenGuard } from '@common/guards/access-token.guard';

import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ITokens } from './auth.types';
import { RefreshTokenGuard } from '@common/guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('sign-in')
	async signIn(
		@Body() dto: AuthDto,
	): Promise<{ user: Omit<User, 'passwordHash' | 'refreshToken'>; tokens: ITokens }> {
		return await this.authService.signIn(dto);
	}

	@UsePipes(new ValidationPipe())
	@Post('sign-up')
	async signUp(
		@Body() dto: AuthDto,
	): Promise<{ user: Omit<User, 'passwordHash' | 'refreshToken'>; tokens: ITokens }> {
		return await this.authService.signUp(dto);
	}

	@UseGuards(AccessTokenGuard)
	@Post('sign-out')
	async signOut(@Body('userId') userId: string): Promise<void> {
		await this.authService.signOut(userId);
	}

	@UseGuards(RefreshTokenGuard)
	@Get('refresh-token')
	async refreshToken(@Req() req: Request): Promise<any> {
		return this.authService.refreshTokens(req['user']?.refreshToken);
	}
}
