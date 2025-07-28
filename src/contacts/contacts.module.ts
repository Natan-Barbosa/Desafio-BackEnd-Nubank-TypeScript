import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './contact.entity';
import { ClientEntitie } from 'src/client/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity, ClientEntitie])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
