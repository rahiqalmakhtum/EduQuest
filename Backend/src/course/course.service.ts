import { InjectRepository } from "@nestjs/typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Course } from "./enities/course.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private courseRepo: Repository<Course>) {}

  // Create course
  async create(dto: CreateCourseDto, teacherId: number) {
    const course = this.courseRepo.create({
      ...dto,
      teacher: { id: teacherId },
    });
    return this.courseRepo.save(course);
  }

  // Get all courses (without filtering by teacher)
  async getAllCourses() {
    return this.courseRepo.find({
      relations: ['teacher', 'lessons'], // Include related teacher and lessons
    });
  }

  // Find courses by teacher
  findAllByTeacher(teacherId: number) {
    return this.courseRepo.find({ where: { teacher: { id: teacherId } }, relations: ['lessons'] });
  }
}
