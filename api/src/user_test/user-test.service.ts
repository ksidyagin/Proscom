import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { UserTestEntity } from './user-test.entity';
import { UserTestI } from './user-test.interface';

@Injectable()
export class UserTestService {

  constructor(
    @InjectRepository(UserTestEntity)
    private readonly testRepository: Repository<UserTestEntity>
  ) { }

  async findAll(): Promise<UserTestI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<UserTestI[]> {
    return this.testRepository.find({ where:{userId:id} });
  }

  async create(object: UserTestI): Promise<UserTestI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: UserTestI): Promise<any> {
    return this.testRepository.update(id, object);
  }

}
