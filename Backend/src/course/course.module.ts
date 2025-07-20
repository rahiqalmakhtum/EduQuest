// src/course/course.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './enities/course.entity';
import { CoursesService } from './course.service';
import { CoursesController } from './course.controller';
import { Teacher } from '../users/entities/teacher.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Course, Teacher])], 
  providers: [CoursesService],
  controllers: [CoursesController],
  exports: [CoursesService], 
})
export class CourseModule {}
