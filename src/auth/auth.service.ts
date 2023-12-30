import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { genSalt, hash, compare } from 'bcryptjs';
import { User } from '@prisma/client';

import { PrismaService } from '../common/prisma/prisma.service';

import { JwtPayload } from './strategies/access-token.strategy';
import { AuthDto } from './dto/auth.dto';
import {
	BAD_PASSWORD_MESAGE,
	USER_ALREADY_EXISTS_MESSAGE,
	USER_NOT_FOUND_MESSAGE,
} from './auth.constants';
import { ITokens } from './auth.types';

// TODO: https://www.elvisduru.com/blog/nestjs-jwt-authentication-refresh-token
@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
		private readonly prisma: PrismaService,
	) {}

	async signUp(
		dto: AuthDto,
	): Promise<{ user: Omit<User, 'passwordHash' | 'refreshToken'>; tokens: ITokens }> {
		const userExists = await this.prisma.user.findFirst({
			where: {
				login: dto.login,
			},
		});

		if (userExists) {
			throw new BadRequestException(USER_ALREADY_EXISTS_MESSAGE);
		}

		const salt = await genSalt(10);
		const passwordHash = await await hash(dto.password, salt);

		const data = {
			login: dto.login,
			passwordHash,
		};

		const user = await this.prisma.user.create({ data });
		delete user.passwordHash;
		delete user.refreshToken;

		const tokens = await this.generateTokens({ id: user.id });

		await this.updateRefreshToken(user.id, tokens.refreshToken);

		return {
			user,
			tokens,
		};
	}

	async signIn(
		dto: AuthDto,
	): Promise<{ user: Omit<User, 'passwordHash' | 'refreshToken'>; tokens: ITokens }> {
		const user = await this.prisma.user.findUnique({
			where: { login: dto.login },
		});

		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND_MESSAGE);
		}

		const valid = await compare(dto.password, user.passwordHash);
		if (!valid) {
			throw new UnauthorizedException(BAD_PASSWORD_MESAGE);
		}

		const tokens = await this.generateTokens({ id: user.id });

		await this.updateRefreshToken(user.id, tokens.refreshToken);

		delete user.passwordHash;
		delete user.refreshToken;

		return { user, tokens };
	}

	async signOut(userId: string): Promise<boolean> {
		try {
			await this.prisma.user.update({
				where: { id: userId },
				data: { refreshToken: null },
			});

			return true;
		} catch (error) {
			return false;
		}
	}

	generateTokens(payload: JwtPayload): ITokens {
		const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
		const refreshToken = this.jwtService.sign(payload, {
			expiresIn: '30d',
			secret: this.configService.get('JWT_REFRESH_SECRET'),
		});

		return {
			accessToken,
			refreshToken,
		};
	}

	async refreshTokens(refreshToken: string) {
		const userData = this.validateRefreshToken(refreshToken);

		if (!userData) {
			throw new BadRequestException('Пользователь не авторизован.');
		}

		const tokens = this.generateTokens({ id: userData.id });

		await this.updateRefreshToken(userData.id, tokens.refreshToken);
		return tokens;
	}

	updateRefreshToken(userId: string, refreshToken: string) {
		return this.prisma.user.update({
			where: { id: userId },
			data: { refreshToken },
		});
	}

	validateAccessToken(token: string) {
		try {
			const userData = this.jwtService.verify(token, {
				secret: this.configService.get('JWT_ACCESS_SECRET'),
			});
			return userData;
		} catch (error) {
			return null;
		}
	}

	validateRefreshToken(token: string) {
		try {
			const userData = this.jwtService.verify(token, {
				secret: this.configService.get('JWT_REFRESH_SECRET'),
			});

			return userData;
		} catch (error) {
			return null;
		}
	}
}
