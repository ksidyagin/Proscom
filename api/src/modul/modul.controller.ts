import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ModulService } from './modul.service';

@Controller('moduls')
export class ModulController {

  constructor(
    private testService: ModulService
  ) { }


  @Get('/find')
  async findById(id: number) {
    return this.testService.findOne(id);
  }


}
