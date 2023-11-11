import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionI } from './model/position.interface';

@Controller('positions')
export class PositionController {

  constructor(
    private testService: PositionService
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
  updateOne(@Param('id')id: string , @Body()object: PositionI) 
  {
      return this.testService.updateOne(Number(id), object);
  }

}
