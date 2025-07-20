import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { CoursesService } from './course.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // Create course
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateCourseDto, @Request() req) {
    return this.coursesService.create(dto, req.user.userId);
  }

  // Get all courses (available to everyone)
  @Get()
  async getAllCourses() {
    return this.coursesService.getAllCourses();
  }

  // Get courses by teacher (with authentication)
  @UseGuards(JwtAuthGuard)
  @Get('my-courses')
  async getMyCourses(@Request() req) {
    return this.coursesService.findAllByTeacher(req.user.userId);
  }
}
