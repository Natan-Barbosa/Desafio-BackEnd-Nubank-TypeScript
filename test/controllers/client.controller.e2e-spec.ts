import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { ClientController } from 'src/client/client.controller';
import { ClientService } from 'src/client/client.service';
import { CreateClientDto } from 'src/client/client.dto';

const mockService = {
  create: jest.fn(),
  get: jest.fn(),
  getById: jest.fn(),
};

describe('Client Controller', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [{ provide: ClientService, useValue: mockService }],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  const invalidMockDto = new CreateClientDto();

  const validMockDto = new CreateClientDto();
  validMockDto.clientName = 'Fake Name';
  validMockDto.cnpj = '12345678901234';
  validMockDto.createdAt = new Date();

  const id = 1;

  describe('Create Controller', () => {
    it('Should Throws Bad Request', () => {
      return request(app.getHttpServer())
        .post('/client')
        .send(invalidMockDto)
        .expect(400);
    });

    it('Should Create With Success', () => {
      return request(app.getHttpServer())
        .post('/client')
        .send(validMockDto)
        .expect(201);
    });
  });

  describe('Get By Id Controller', () => {
    it('Should return With Success', () => {
      return request(app.getHttpServer()).get(`/client/${id}`).expect(200);
    });
  });
});
