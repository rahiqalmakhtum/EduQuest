// src/lessons/lesson.controller.ts
import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { LessonsService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateLessonDto) {
    return this.lessonsService.create(dto);
  }
  @UseGuards(JwtAuthGuard)
@Get(':courseId')
findByCourse(@Param('courseId') courseId: number) {
  try {
    return this.lessonsService.findByCourse(+courseId);
  } catch (error) {
    console.error('Error in findByCourse:', error);
    throw new Error('Error fetching lessons');
  }
}

}
