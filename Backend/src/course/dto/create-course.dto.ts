import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty() // Ensure title is not empty
  title: string;

  @IsString()
  @IsOptional() // Allow description to be optional
  description?: string;
}
