import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { GetContactDto } from 'src/contacts/contacts.dto';
import { ContactsController } from 'src/contacts/contacts.controller';
import { ContactsService } from 'src/contacts/contacts.service';

const mockService = {
  create: jest.fn(),
};

describe('Contacts Controller /contacts', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [{ provide: ContactsService, useValue: mockService }],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    await app.close();
    jest.clearAllMocks();
  });

  const input = {
    clientID: 1,
    contactName: 'Fake Name',
    contactNumber: '12921827821',
  };

  const output = new GetContactDto();
  output.contactName = 'Fake Name';
  output.contactNumber = '12345679';
  output.createdAt = new Date();
  output.id = 1;

  it('Should Return Status 400', () => {
    return request(app.getHttpServer()).post('/contacts').send().expect(400);
  });

  it('Should Return Status 201', () => {
    mockService.create.mockReturnValue(output);

    return request(app.getHttpServer())
      .post('/contacts')
      .send(input)
      .expect(201)
      .then(() => expect(mockService.create).toHaveBeenCalled());
  });
});
