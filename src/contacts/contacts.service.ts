import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from './contact.entity';
import { CreateContactDto } from './contacts.dto';
import { plainToInstance } from 'class-transformer';
import { ClientEntitie } from 'src/client/client.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactsRepository: Repository<ContactEntity>,

    @InjectRepository(ClientEntitie)
    private clientRepository: Repository<ClientEntitie>,
  ) {}

  async create(dto: CreateContactDto) {
    const clientExists = await this.clientRepository.findOneBy({
      id: dto.clientID,
    });
    if (!clientExists) {
      throw new BadRequestException(
        'Client Not Exists, Please Inform A Valid Client',
      );
    }

    const newContact = plainToInstance(ContactEntity, {
      ...dto,
      createdAt: new Date(),
    });
    return await this.contactsRepository.save(newContact);
  }
}
