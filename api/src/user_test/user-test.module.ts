import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTestEntity } from './user-test.entity';
import { UserTestService } from './user-test.service';
import { UserTestController } from './user-test.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTestEntity])
  ],
  controllers: [UserTestController],
  providers: [UserTestService],
  exports: [UserTestService]
})
export class UserTestModule {}
