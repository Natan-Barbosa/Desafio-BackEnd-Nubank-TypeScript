import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from './contact.entity';
import { CreateContactDto, GetContactDto } from './contacts.dto';
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
    const contactExists = await this.contactsRepository.existsBy({
      contactNumber: dto.contactNumber,
    });

    if (contactExists) {
      throw new BadRequestException('The Informed Contact Already Exists!');
    }
    if (!clientExists) {
      throw new BadRequestException(
        'Client Not Exists, Please Inform A Valid Client',
      );
    }

    const newContact = plainToInstance(ContactEntity, {
      ...dto,
      client: clientExists,
      createdAt: new Date(),
    });
    const savedContact = await this.contactsRepository.save(newContact);
    return plainToInstance(GetContactDto, savedContact);
  }
}
