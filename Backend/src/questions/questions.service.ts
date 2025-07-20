// src/questions/question.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { Lesson } from '../lesson/entities/lesson.entity';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
  ) {}

  async create(dto: CreateQuestionDto): Promise<Question> {
    const lesson = await this.lessonRepo.findOneBy({ id: dto.lessonId });
    if (!lesson) throw new Error('Lesson not found');
    const question = this.questionRepo.create({ ...dto, lesson });
    return this.questionRepo.save(question);
  }

  async findByLesson(lessonId: number): Promise<Question[]> {
    return this.questionRepo.find({ where: { lesson: { id: lessonId } } });
  }
}
