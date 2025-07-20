import { Module } from '@nestjs/common';
import { LessonsService } from './lesson.service';
import { LessonsController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Course } from '../course/enities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Course])],
  providers: [LessonsService],
  controllers: [LessonsController],
  exports: [LessonsService],
})
export class LessonsModule {}
