import { MinLength, IsEmail } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @MinLength(10)
  password: string;
}
