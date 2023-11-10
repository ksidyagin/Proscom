import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Injectable } from '@nestjs/common';
import { ModulEntity } from './model/modul.entity';
import { ModulI } from './model/modul.interface';


@Injectable()
export class ModulService {

  constructor(
    @InjectRepository(ModulEntity)
    private readonly testRepository: Repository<ModulEntity>
  ) { }


  async findAll(): Promise<ModulI[]> {
    return this.testRepository.find();
  }


  async findOne(id: number): Promise<ModulI> {
    return this.testRepository.findOne({ id });
  }





}
