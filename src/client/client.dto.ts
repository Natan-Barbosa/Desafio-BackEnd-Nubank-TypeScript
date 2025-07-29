import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  clientName: string;

  @Length(14, 14)
  @ApiProperty()
  cnpj: string;
  createdAt: Date;
}

export class GetClientByIdDto {
  @IsNumberString()
  id: number;
}
