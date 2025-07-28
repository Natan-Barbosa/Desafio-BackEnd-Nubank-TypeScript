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
  contactName: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  contactNumber: string;

  @IsNumber()
  @IsNotEmpty()
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
