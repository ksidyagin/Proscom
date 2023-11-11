import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ProgramService } from './program.service';
import { ProgramI } from './model/program.interface';

@Controller('programs')
export class ProgramController {

  constructor(
    private testService: ProgramService
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
  updateOne(@Param('id')id: string , @Body()object: ProgramI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
