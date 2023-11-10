import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { TestEntity } from './model/test.entity';
import { Injectable } from '@nestjs/common';
import { TestI } from './model/test.interface';

@Injectable()
export class TestService {

  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepository: Repository<TestEntity>
  ) { }


  async findAll(options: IPaginationOptions): Promise<Pagination<TestI>> {
    return paginate<TestEntity>(this.testRepository, options);
  }


  async findOne(id: number): Promise<TestI> {
    return this.testRepository.findOne({ id });
  }





}
