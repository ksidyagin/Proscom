import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { UserTestService } from './user-test.service';
import { UserTestI } from './user-test.interface';

@Controller('user-test')
export class UserTestController {

  constructor(
    private testService: UserTestService
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
  updateOne(@Param('id')id: string , @Body()object: UserTestI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
