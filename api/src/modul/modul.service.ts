import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return this.testRepository.find({relations: ['test']});
  }

  async findOne(id: number): Promise<ModulI> {
    return this.testRepository.findOne({ id });
  }

  async findByStage(id: number): Promise<ModulI[]> {
    return this.testRepository.find({ where:{stage:{id:id}} });
  }

  async create(object: ModulI): Promise<ModulI> {
    return this.testRepository.save(object);
  }

  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: ModulI): Promise<any> {
    return this.testRepository.update(id, object);
  }


}
