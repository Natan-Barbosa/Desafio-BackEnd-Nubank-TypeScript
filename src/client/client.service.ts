import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntitie } from './client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './client.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntitie)
    private clientRepository: Repository<ClientEntitie>,
  ) {}

  async create(dto: CreateClientDto) {
    const clientAlreadyExists = await this.clientRepository.existsBy({
      cnpj: dto.cnpj,
    });
    if (clientAlreadyExists) {
      throw new BadRequestException('Client Already Exists');
    }

    const newClient = plainToClass(ClientEntitie, {
      ...dto,
      createdAt: new Date(),
    });
    return await this.clientRepository.save(newClient);
  }

  async get() {
    return await this.clientRepository.find();
  }

  async getById(id: number) {
    return await this.clientRepository.findOneBy({
      id: id,
    });
  }
}
