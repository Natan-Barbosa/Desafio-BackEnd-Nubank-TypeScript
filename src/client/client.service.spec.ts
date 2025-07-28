import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClientEntitie } from './client.entity';
import { CreateClientDto } from './client.dto';
import { plainToClass } from 'class-transformer';

const mockRepository = {
  existsBy: jest.fn(),
  save: jest.fn(),
};

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: getRepositoryToken(ClientEntitie),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  const mockDto = new CreateClientDto();
  mockDto.clientName = 'Fake Name';
  mockDto.cnpj = '12345678901234';
  mockDto.createdAt = new Date();

  const mockPlain = plainToClass(ClientEntitie, {
    ...mockDto,
    createdAt: new Date(),
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should Throw Client Already Exists', async () => {
    mockRepository.existsBy.mockResolvedValue(true);

    await expect(service.create(mockDto)).rejects.toThrow(
      'Client Already Exists',
    );
  });

  it('Should Create With Success', async () => {
    mockRepository.existsBy.mockResolvedValue(false);
    mockRepository.save.mockResolvedValue(mockPlain);

    const serviceResponse = await service.create(mockDto);

    expect(serviceResponse).not.toBeNull();
    expect(serviceResponse).not.toBeUndefined();
  });
});
