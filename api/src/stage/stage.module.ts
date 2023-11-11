import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageEntity } from './model/stage.entity';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StageEntity])
  ],
  controllers: [StageController],
  providers: [StageService],
  exports: [StageService]
})
export class StageModule {}
