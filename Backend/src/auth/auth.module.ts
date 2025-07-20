// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'your_jwt_secret', // should match jwt.strategy.ts
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController], // ✅ this line registers /auth/login
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
