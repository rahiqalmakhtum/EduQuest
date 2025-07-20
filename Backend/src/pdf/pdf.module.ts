// src/pdf/pdf.module.ts
import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';
import { QuestionGeneratorService } from './question-generator.service';
import { LessonsModule } from '../lesson/lesson.module';
import { QuestionModule } from '../questions/questions.module';

@Module({
  imports: [LessonsModule, QuestionModule], // Correct: import modules
  controllers: [PdfController],
  providers: [PdfService, QuestionGeneratorService], // Only your own services here
})
export class PdfModule {}
