import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AboutHrEntity } from './model/about-hr.entity';
import { AboutHrI } from './model/about-hr.interface';

@Injectable()
export class AboutHrService {

  constructor(
    @InjectRepository(AboutHrEntity)
    private readonly testRepository: Repository<AboutHrEntity>
  ) { }


  async findAll(): Promise<AboutHrI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<AboutHrI> {
    return this.testRepository.findOne({ id });
  }


  async create(object: AboutHrI): Promise<AboutHrI> {
    return this.testRepository.save(object);
  }



  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: AboutHrI): Promise<any> {
    return this.testRepository.update(id, object);
  }





}
