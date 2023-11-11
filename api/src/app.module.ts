import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ChatModule } from './chat/chat.module';
import { TestModule } from './course-test/test.module';
import { ModulModule } from './modul/modul.module';
import { StageModule } from './stage/stage.module';
import { ProgramModule } from './program/program.module';
import { AboutEmployeeModule } from './about-employee/about-employee.module';
import { AboutHrModule } from './about-hr/about-hr.module';
import { DepartmentModule } from './department/department.module';
import { PositionModule } from './position/position.module';
import { UserTestModule } from './user_test/user-test.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'chat_socket',
      username: 'postgres',
      password: '1111',
      autoLoadEntities:true,
      synchronize:true
    }),
    UserModule,
    AuthModule,
    ChatModule,
    TestModule,
    ModulModule,
    StageModule,
    ProgramModule,
    AboutEmployeeModule,
    AboutHrModule,
    DepartmentModule,
    PositionModule,
    UserTestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: '/api/users', method: RequestMethod.POST},
        {path: '/api/users/login', method: RequestMethod.POST}
      )
      .forRoutes('')
  }
}