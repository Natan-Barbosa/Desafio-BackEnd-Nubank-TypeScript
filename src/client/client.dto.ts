import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  clientName: string;

  @Length(14, 14)
  cnpj: string;
  createdAt = new Date().toISOString();
}
