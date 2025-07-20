// src/questions/entities/question.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column('simple-array')
  options: string[];

  @Column()
  correctAnswer: string;

  @ManyToOne(() => Lesson, lesson => lesson.questions, { onDelete: 'CASCADE' })
  lesson: Lesson;
}
