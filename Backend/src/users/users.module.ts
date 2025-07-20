// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Student, Teacher])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Export UsersService so AuthModule can use it
})
export class UsersModule {}
