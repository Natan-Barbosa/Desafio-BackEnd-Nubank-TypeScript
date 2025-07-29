import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';
import { ClientEntitie } from 'src/client/client.entity';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  contactName: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty()
  contactNumber: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  clientID: number;

  client: ClientEntitie;

  createdAt: Date;
}

export class GetContactDto {
  id: number;
  contactName: string;
  contactNumber: string;
  createdAt: Date;
  @Exclude()
  client: ClientEntitie;
}
