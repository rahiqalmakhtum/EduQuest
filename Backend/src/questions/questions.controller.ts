// src/questions/question.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { QuestionService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('questions')
export class QuestionController {
  constructor(private readonly service: QuestionService) {}

  @Post()
  create(@Body() dto: CreateQuestionDto) {
    return this.service.create(dto);
  }

  @Get(':lessonId')
  findByLesson(@Param('lessonId') lessonId: number) {
    return this.service.findByLesson(+lessonId);
  }
}
