import { IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  clientName: string;

  @Length(14, 14)
  cnpj: string;
  createdAt: Date;
}

export class GetClientByIdDto {
  @IsNumberString()
  id: number;
}
