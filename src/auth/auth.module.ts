import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { getJWTConfig } from '../common/configs/jwt.config';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { AuthService } from './auth.service';

@Module({
	imports: [ConfigModule, JwtModule.registerAsync(getJWTConfig())],
	providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
	controllers: [AuthController],
})
export class AuthModule {}
