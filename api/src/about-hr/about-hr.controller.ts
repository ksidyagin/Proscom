import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AboutHrService } from './about-hr.service';
import { AboutHrI } from './model/about-hr.interface';

@Controller('about-hr')
export class AboutHrController {

  constructor(
    private testService: AboutHrService
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
  updateOne(@Param('id')id: string , @Body()object: AboutHrI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
