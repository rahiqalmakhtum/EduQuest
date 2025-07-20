// update-teacher.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { RegisterTeacherDto } from './register-teacher.dto';

export class UpdateTeacherDto extends PartialType(RegisterTeacherDto) {}
