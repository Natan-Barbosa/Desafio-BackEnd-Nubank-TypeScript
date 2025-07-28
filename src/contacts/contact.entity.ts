import { ClientEntitie } from 'src/client/client.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contact_table' })
export class ContactEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'contact_name', nullable: false })
  contactName: string;

  @Column({ name: 'contact_number', nullable: false, unique: true })
  contactNumber: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => ClientEntitie, (ClientEntitie) => ClientEntitie.contacts, {
    cascade: true,
    eager: false,
  })
  client: ClientEntitie;
}
