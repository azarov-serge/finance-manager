import { Body, Controller, Param, Post, Delete } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ITokens } from './auth.types';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('sign-in')
	async signIn(@Body() dto: AuthDto): Promise<ITokens> {
		return this.authService.signIn(dto);
	}

	@Post('sign-up')
	async signUp(@Body() dto: AuthDto): Promise<ITokens> {
		return this.authService.signUp(dto);
	}

	@Delete(':userId')
	async delete(@Param('userId') userId: string): Promise<void> {
		this.authService.signOut(userId);
	}
}
