import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto, GetClientByIdDto } from './client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() dto: CreateClientDto) {
    return await this.clientService.create(dto);
  }

  @Get()
  async get() {
    return await this.clientService.get();
  }

  @Get(':id')
  async getById(@Param() dto: GetClientByIdDto) {
    return await this.clientService.getById(dto.id);
  }
}
