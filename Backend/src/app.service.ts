import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPrivate(): string {
    return 'This is a private resource. Welcome member!';
  }
  
  getPublic(): string {
    return 'This is a public resource. Welcome guest';
  }
  
}
