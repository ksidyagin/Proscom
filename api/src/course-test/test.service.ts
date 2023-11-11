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

  async findAll(): Promise<TestI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<TestI> {
    return this.testRepository.findOne({ id });
  }

  async create(object: TestI): Promise<TestI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: TestI): Promise<any> {
    return this.testRepository.update(id, object);
  }

}
