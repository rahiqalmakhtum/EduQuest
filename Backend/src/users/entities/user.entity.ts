// src/users/entities/user.entity.ts
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: 'student' | 'teacher';

  @OneToOne(() => Student, student => student.user, { cascade: true })
  student: Student;

  @OneToOne(() => Teacher, teacher => teacher.user, { cascade: true })
  teacher: Teacher;
  courses: any;
}
