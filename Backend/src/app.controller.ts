import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { pipeline } from 'stream';

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/public')
  getPublic(): string {
    return this.appService.getPublic();
  }
  
  @Get('/private')
  getPrivate(): string {
    return this.appService.getPrivate();
  }
  
  
}
