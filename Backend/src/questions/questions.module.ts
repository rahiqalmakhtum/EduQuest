import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Lesson } from '../lesson/entities/lesson.entity';
import { QuestionService } from './questions.service';
import { QuestionController } from './questions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Lesson])],
  providers: [QuestionService],
  controllers: [QuestionController],
  exports: [QuestionService],
})
export class QuestionModule {}
