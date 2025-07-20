import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for the frontend URL (localhost:4028)
  app.enableCors({
    origin: 'http://localhost:4028',  // Frontend URL (change this to match your frontend URL)
    methods: 'GET, POST, PUT, DELETE',  // Allow HTTP methods you plan to use
    allowedHeaders: 'Content-Type, Authorization',  // Allow headers like Content-Type and Authorization (for JWT)
    credentials: true,  // Allow credentials (cookies, authentication tokens, etc.)
  });

  await app.listen(3000);  // Backend is running on port 3000
}

bootstrap();
