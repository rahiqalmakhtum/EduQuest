// src/users/users.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterStudentDto } from './dto/register-student.dto';
import { RegisterTeacherDto } from './dto/register-teacher.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register/student')
  registerStudent(@Body() dto: RegisterStudentDto) {
  return this.usersService.registerStudent(dto);
}


  @Post('register/teacher')
  async registerTeacher(@Body() dto: RegisterTeacherDto) {
    return this.usersService.registerTeacher(dto);
  }

  @Get('students')
  async getStudents() {
    return this.usersService.getAllStudents();
  }
}
