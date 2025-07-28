import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ClientEntitie } from './client/client.entity';
import { ContactEntity } from './contacts/contact.entity';
import { ClientModule } from './client/client.module';
import { ContactsModule } from './contacts/contacts.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ClientEntitie, ContactEntity],
      autoLoadEntities: true,
      synchronize: true,
      // logging: true,
    }),
    ClientModule,
    ContactsModule,
  ],
})
export class AppModule {}
