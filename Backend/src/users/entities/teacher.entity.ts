// src/users/entities/teacher.entity.ts
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  educationLevel: string;

  @Column()
  major: string;

  @OneToOne(() => User, user => user.teacher, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}
