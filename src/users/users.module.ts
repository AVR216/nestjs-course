import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { UserController } from './controllers/users.controller';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UserController]
})
export class UsersModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/users', method: RequestMethod.GET },
      {
        path: '/users', method: RequestMethod.POST
      }
    ).apply(AuthMiddleware).forRoutes('users');
  }

}
