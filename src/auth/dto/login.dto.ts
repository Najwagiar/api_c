
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({}, { message: 'Format email tidak valid' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  @IsString()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  readonly password: string;
}
