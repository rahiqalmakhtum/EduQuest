// src/pdf/pdf.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PdfService } from './pdf.service';
import { QuestionGeneratorService } from './question-generator.service';
import { LessonsService } from '../lesson/lesson.service';
import { QuestionService } from '../questions/questions.service';

@Controller('pdf')
export class PdfController {
  constructor(
    private readonly pdfService: PdfService,
    private readonly questionGenService: QuestionGeneratorService,
    private readonly lessonsService: LessonsService,
    private readonly questionsService: QuestionService,
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, unique + extname(file.originalname));
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
          cb(new Error('Only PDFs are allowed'), false);
        } else {
          cb(null, true);
        }
      },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { courseId: number; lessonTitle: string },
  ) {
    if (!body.courseId || !body.lessonTitle) {
      throw new BadRequestException('courseId and lessonTitle are required');
    }

    const content = await this.pdfService.extractText(file.path);
    const parsedQuestions = this.questionGenService.generateQuestions(content);

    // 1. Create Lesson
    const lesson = await this.lessonsService.create({
      title: body.lessonTitle,
      courseId: body.courseId,
    });

    // 2. Save questions under the lesson
    for (const q of parsedQuestions) {
      await this.questionsService.create({
        text: q.text,
        options: q.options,
        correctAnswer: q.correctAnswer,
        lessonId: lesson.id,
      });
    }

    return {
      message: 'Lesson and questions created successfully',
      lessonId: lesson.id,
      questionCount: parsedQuestions.length,
    };
  }
}
