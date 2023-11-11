import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AboutEmployeeEntity } from './model/about-employee.entity';
import { AboutEmployeeI } from './model/about-employee.interface';

@Injectable()
export class AboutEmployeeService {

  constructor(
    @InjectRepository(AboutEmployeeEntity)
    private readonly testRepository: Repository<AboutEmployeeEntity>
  ) { }


  async findAll(): Promise<AboutEmployeeI[]> {
    return this.testRepository.find();
  }

  async findOne(id: number): Promise<AboutEmployeeI> {
    return this.testRepository.findOne({ id });
  }


  async create(object: AboutEmployeeI): Promise<AboutEmployeeI> {
    return this.testRepository.save(object);
  }



  async deleteOne(id: number): Promise<any> {
    return this.testRepository.delete(id);
  }

  async updateOne(id: number, object: AboutEmployeeI): Promise<any> {
    return this.testRepository.update(id, object);
  }





}
