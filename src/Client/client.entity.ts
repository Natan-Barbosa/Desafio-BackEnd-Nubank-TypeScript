import { ContactEntity } from 'src/Contacts/contact.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client_table' })
export class ClientEntitie {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ nullable: false, name: 'client_name' })
  clientName: string;

  @Column({ unique: true, name: 'cnpj', nullable: false, length: 14 })
  cnpj: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => ContactEntity, (ContactEntity) => ContactEntity.client)
  contacts: ContactEntity[];
}
