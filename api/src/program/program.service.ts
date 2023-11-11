import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { ProgramEntity } from './model/program.entity';
import { ProgramI } from './model/program.interface';

@Injectable()
export class ProgramService {

  constructor(
    @InjectRepository(ProgramEntity)
    private readonly testRepository: Repository<ProgramEntity>
  ) { }


  async findAll(): Promise<ProgramI[]> {
    return this.testRepository.find({relations: ['stages']});
  }

  async findOne(id: number): Promise<ProgramI> {
    return this.testRepository.findOne({ id });
  }


  async create(object: ProgramI): Promise<ProgramI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: ProgramI): Promise<any> {
    return this.testRepository.update(id, object);
  }

}
