// src/lessons/lesson.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Course } from '../course/enities/course.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
    @InjectRepository(Course) private courseRepo: Repository<Course>,
  ) {}

  async create(dto: CreateLessonDto): Promise<Lesson> {
    const course = await this.courseRepo.findOneBy({ id: dto.courseId });
    if (!course) throw new Error('Course not found');
    const lesson = this.lessonRepo.create({ title: dto.title, course });
    return this.lessonRepo.save(lesson);
  }

  async findByCourse(courseId: number): Promise<Lesson[]> {
    return this.lessonRepo.find({ where: { course: { id: courseId } }, relations: ['questions'] });
  }
}
