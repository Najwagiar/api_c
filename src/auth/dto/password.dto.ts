
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class PasswordDto {
  @IsNotEmpty({ message: 'Password harus diisi' })
  @IsString()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  @MaxLength(20, { message: 'Password maksimal 20 karakter' })
  readonly password: string;

  @IsNotEmpty({ message: 'Konfirmasi password harus diisi' })
  @IsString()
  readonly password_confirmation: string;
}
