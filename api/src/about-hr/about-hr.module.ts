import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutHrEntity } from './model/about-hr.entity';
import { AboutHrController } from './about-hr.controller';
import { AboutHrService } from './about-hr.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AboutHrEntity])
  ],
  controllers: [AboutHrController],
  providers: [AboutHrService],
  exports: [AboutHrService]
})
export class AboutHrModule {}
