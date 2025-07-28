import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './contacts.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() dto: CreateContactDto) {
    return await this.contactsService.create(dto);
  }
}
