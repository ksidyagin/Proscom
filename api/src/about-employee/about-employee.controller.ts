import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AboutEmployeeService } from './about-employee.service';
import { AboutEmployeeI } from './model/about-employee.interface';

@Controller('about-employee')
export class AboutEmployeeController {

  constructor(
    private testService: AboutEmployeeService
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
  updateOne(@Param('id')id: string , @Body()object: AboutEmployeeI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
