import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nubank API')
  .setDescription('Api de Desafio Backend Nubank')
  .setVersion('1.0')
  .build();
