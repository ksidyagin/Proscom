import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutEmployeeEntity } from './model/about-employee.entity';
import { AboutEmployeeController } from './about-employee.controller';
import { AboutEmployeeService } from './about-employee.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AboutEmployeeEntity])
  ],
  controllers: [AboutEmployeeController],
  providers: [AboutEmployeeService],
  exports: [AboutEmployeeService]
})
export class AboutEmployeeModule {}
