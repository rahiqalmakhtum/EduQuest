import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PdfModule } from './pdf/pdf.module';
import { Student } from './users/entities/student.entity';
import { Teacher } from './users/entities/teacher.entity';
import { QuestionModule } from './questions/questions.module';
import { CourseModule } from './course/course.module';
import { LessonsModule } from './lesson/lesson.module';
import { Question } from './questions/entities/question.entity';
import { Course } from './course/enities/course.entity';
import { Lesson } from './lesson/entities/lesson.entity';



@Module({
  imports: [    
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'EduQuest',
    entities: [User, Student, Teacher, Question, Course, Lesson],
    synchronize: true,
  }), AuthModule, UsersModule, PdfModule, QuestionModule, CourseModule, LessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
