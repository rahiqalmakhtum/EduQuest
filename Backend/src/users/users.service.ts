import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { RegisterStudentDto } from './dto/register-student.dto';
import { RegisterTeacherDto } from './dto/register-teacher.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Student) private studentRepo: Repository<Student>,
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
  ) {}

  async registerStudent(dto: RegisterStudentDto): Promise<User> {
    if (dto.password !== dto.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      gender: dto.gender,
      email: dto.email,
      password: hashed,
      role: 'student',
    });

    const savedUser = await this.userRepo.save(user);

    const student = this.studentRepo.create({
      fieldOfInterest: dto.fieldOfInterest,
      user: savedUser,
    });

    await this.studentRepo.save(student);
    return savedUser;
  }

  async registerTeacher(dto: RegisterTeacherDto): Promise<User> {
    if (dto.password !== dto.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      gender: dto.gender,
      email: dto.email,
      password: hashed,
      role: 'teacher',
    });

    const savedUser = await this.userRepo.save(user);

    const teacher = this.teacherRepo.create({
      educationLevel: dto.educationLevel,
      major: dto.major,
      user: savedUser,
    });

    await this.teacherRepo.save(teacher);
    return savedUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({
      where: { email },
      relations: ['student', 'teacher'],
    });
  }

  async getAllStudents() {
    return this.userRepo.find({
      where: { role: 'student' }, // Only fetch users with the 'student' role
      relations: ['student'], // Optionally, include student-related data
    });
  }

}
