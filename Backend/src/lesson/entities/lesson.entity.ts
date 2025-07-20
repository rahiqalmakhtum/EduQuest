// src/lessons/entities/lesson.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Course } from '../../course/enities/course.entity';
import { Question } from '../../questions/entities/question.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Course, course => course.lessons)
  course: Course;

  @OneToMany(() => Question, question => question.lesson)
  questions: Question[];
}
