// src/users/entities/student.entity.ts
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fieldOfInterest: string;

  @OneToOne(() => User, user => user.student, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
