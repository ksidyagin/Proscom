import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { StageEntity } from './model/stage.entity';
import { StageI } from './model/stage.interface';



@Injectable()
export class StageService {

  constructor(
    @InjectRepository(StageEntity)
    private readonly testRepository: Repository<StageEntity>
  ) { }

  async findAll(): Promise<StageI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<StageI> {
    return this.testRepository.findOne({ id ,},{relations: ['modules']});
  }

  async findByProgram(id: number): Promise<StageI[]> {
    return this.testRepository.find({ where:{program:{id:id}} });
  }

  async create(object: StageI): Promise<StageI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: StageI): Promise<any> {
    return this.testRepository.update(id, object);
  }
  
}
