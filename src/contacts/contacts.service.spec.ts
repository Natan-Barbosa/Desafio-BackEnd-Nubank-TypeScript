import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ContactEntity } from './contact.entity';
import { ClientEntitie } from 'src/client/client.entity';
import { CreateContactDto } from './contacts.dto';
import { plainToInstance } from 'class-transformer';

const mockClientRepository = {
  findOneBy: jest.fn(),
};

const mockContactRepository = {
  existsBy: jest.fn(),
  save: jest.fn(),
};

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        {
          provide: getRepositoryToken(ContactEntity),
          useValue: mockContactRepository,
        },
        {
          provide: getRepositoryToken(ClientEntitie),
          useValue: mockClientRepository,
        },
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  const mockDto = new CreateContactDto();
  const mockClient = new ClientEntitie();
  mockDto.client = mockClient;
  mockDto.clientID = 1;
  mockDto.contactName = 'Fake Contact Name';
  mockDto.contactNumber = '123456789';
  mockDto.createdAt = new Date();

  const mockPlain = plainToInstance(ContactEntity, {
    ...mockDto,
    client: mockClient,
    createdAt: new Date(),
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should Throws BadRequestException', async () => {
    mockClientRepository.findOneBy.mockResolvedValue(null);
    await expect(service.create(mockDto)).rejects.toThrow(
      'Client Not Exists, Please Inform A Valid Client',
    );
    expect(mockContactRepository.save).not.toHaveBeenCalled();
  });

  it('Should Throws BadRequestException', async () => {
    mockClientRepository.findOneBy.mockResolvedValue(null);
    mockContactRepository.existsBy.mockResolvedValue(true);
    await expect(service.create(mockDto)).rejects.toThrow(
      'The Informed Contact Already Exists!',
    );
    expect(mockContactRepository.save).not.toHaveBeenCalled();
  });

  it('Should Create With Success', async () => {
    mockClientRepository.findOneBy.mockResolvedValue(mockClient);
    mockContactRepository.existsBy.mockResolvedValue(false);
    mockContactRepository.save.mockResolvedValue(mockPlain);

    const serviceResponse = await service.create(mockDto);

    expect(serviceResponse).not.toBeNull();
    expect(serviceResponse).not.toBeUndefined();
    expect(mockContactRepository.save).toHaveBeenCalled();
  });
});
