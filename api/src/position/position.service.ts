import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { PositionEntity } from './model/position.entity';
import { PositionI } from './model/position.interface';


@Injectable()
export class PositionService {

  constructor(
    @InjectRepository(PositionEntity)
    private readonly testRepository: Repository<PositionEntity>
  ) { }

  async findAll(): Promise<PositionI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<PositionI> {
    return this.testRepository.findOne({ id });
  }

  async create(object: PositionI): Promise<PositionI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: PositionI): Promise<any> {
    return this.testRepository.update(id, object);
  }

}
