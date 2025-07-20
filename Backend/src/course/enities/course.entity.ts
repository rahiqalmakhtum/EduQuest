// src/courses/entities/course.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Lesson } from '../../lesson/entities/lesson.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, user => user.courses)
  teacher: User;

  @OneToMany(() => Lesson, lesson => lesson.course)
  lessons: Lesson[];
}
