
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Nama harus diisi' })
  @IsString()
  @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
  readonly name: string;

  @IsNotEmpty({ message: 'Username harus diisi' })
@IsString()
readonly username: string;

  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({}, { message: 'Format email tidak valid' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password harus diisi' })
  @IsString()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  readonly password: string;

  @IsNotEmpty({ message: 'Konfirmasi password harus diisi' })
  @IsString()
  readonly password_confirmation: string;
}
