import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DepartmentService } from './department.service';
import { DepartmentI } from './model/department.interface';

@Controller('departments')
export class DepartmentController {

  constructor(
    private testService: DepartmentService
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
  updateOne(@Param('id')id: string , @Body()object: DepartmentI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
