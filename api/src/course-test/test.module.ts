import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './model/test.entity';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity])
  ],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestService]
})
export class TestModule {}
