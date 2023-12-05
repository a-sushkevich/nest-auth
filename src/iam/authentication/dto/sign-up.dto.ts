import { MinLength, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @MinLength(10)
  password: string;
}
