import {
	Body,
	Controller,
	Post,
	InternalServerErrorException,
	UseGuards,
	Req,
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

	@Post('sign-in')
	async signIn(@Body() dto: AuthDto): Promise<ITokens> {
		try {
			return await this.authService.signIn(dto);
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@Post('sign-up')
	async signUp(@Body() dto: AuthDto): Promise<User> {
		try {
			return await this.authService.signUp(dto);
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@UseGuards(AccessTokenGuard)
	@Post('sign-out')
	async signOut(@Body('userId') userId: string): Promise<void> {
		try {
			await this.authService.signOut(userId);
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}

	@UseGuards(RefreshTokenGuard)
	@Post('refresh-token')
	async refreshToken(@Req() req: Request): Promise<any> {
		try {
			return this.authService.refreshTokens(req['user']?.refreshToken);
		} catch (error: any) {
			throw new InternalServerErrorException(error?.message || `${error}`);
		}
	}
}
