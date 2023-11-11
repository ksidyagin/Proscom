import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ModulService } from './modul.service';
import { ModulI } from './model/modul.interface';

@Controller('moduls')
export class ModulController {

  constructor(
    private testService: ModulService
  ) { }


  @Get()
  async findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number)
  {
      return this.testService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id')id: string)
  {
      return this.testService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id')id: string , @Body()object: ModulI) 
  {
      return this.testService.updateOne(Number(id), object);
  }


}
