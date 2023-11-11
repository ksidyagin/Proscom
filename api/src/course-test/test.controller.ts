import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { TestService } from './test.service';
import { TestI } from './model/test.interface';

@Controller('tests')
export class TestController {

  constructor(
    private testService: TestService
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
  updateOne(@Param('id')id: string , @Body()object: TestI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
