
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Nama harus diisi' })
  @IsString()
  readonly name: string;

  @IsNotEmpty({ message: 'Author harus diisi' })
  @IsString()
  readonly author: string;

  @IsNotEmpty({ message: 'ISBN harus diisi' })
  @IsString()
  readonly isbn: string;

  @IsNotEmpty({ message: 'Publisher harus diisi' })
  @IsNumber({}, { message: 'Publisher harus berupa angka' })
  readonly publisher: number;
}
