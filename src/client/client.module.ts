import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntitie } from './client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntitie])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
