import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { MIN_PASSWORD_LENGTH } from '../auth.constants';

export class AuthDto {
	@IsNotEmpty()
	@IsString()
	login: string;

	@MinLength(MIN_PASSWORD_LENGTH)
	@IsNotEmpty()
	@IsString()
	password: string;
}
