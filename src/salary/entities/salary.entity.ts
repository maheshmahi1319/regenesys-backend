import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('salary')
export class Salary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, unique: true, nullable: true })
  name: string;

  @Column()
  salary: number;

  @Column()
  currency: string;

  @Column()
  department: string;

  @Column()
  sub_department: string;

  @Column({ type: 'boolean' })
  on_contract: boolean;
  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  deletedAt: Date;
}
