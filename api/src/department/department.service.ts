import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

import { Injectable } from '@nestjs/common';
import { DepartmentEntity } from './model/department.entity';
import { DepartmentI } from './model/department.interface';

@Injectable()
export class DepartmentService {

  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly testRepository: Repository<DepartmentEntity>
  ) { }

  async findAll(): Promise<DepartmentI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<DepartmentI> {
    return this.testRepository.findOne({ id });
  }

  async create(object: DepartmentI): Promise<DepartmentI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: DepartmentI): Promise<any> {
    return this.testRepository.update(id, object);
  }

}
