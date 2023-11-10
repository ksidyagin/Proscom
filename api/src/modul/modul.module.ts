import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModulEntity } from './model/modul.entity';
import { ModulController } from './modul.controller';
import { ModulService } from './modul.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ModulEntity])
  ],
  controllers: [ModulController],
  providers: [ModulService],
  exports: [ModulService]
})
export class ModulModule {}
