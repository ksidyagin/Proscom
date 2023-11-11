import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { StageService } from './stage.service';
import { StageI } from './model/stage.interface';

@Controller('stages')
export class StageController {

  constructor(
    private testService: StageService
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

  @Get('/by-program')
  findByProgram(@Param('id') id: number)
  {
      return this.testService.findByProgram(id);
  }

  @Delete(':id')
  deleteOne(@Param('id')id: string)
  {
      return this.testService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id')id: string , @Body()object: StageI) 
  {
      return this.testService.updateOne(Number(id), object);
  }
}
