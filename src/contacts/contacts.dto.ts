import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

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

  createdAt: Date;
}
