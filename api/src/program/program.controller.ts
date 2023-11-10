import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { TestService } from './test.service';

@Controller('tests')
export class TestController {

  constructor(
    private testService: TestService
  ) { }


  @Get('/find')
  async findAllByUsername(id: number) {
    return this.testService.findOne(id);
  }


}
