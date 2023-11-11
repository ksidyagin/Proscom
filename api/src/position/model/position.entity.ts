
import { DepartmentEntity } from "src/department/model/department.entity";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PositionEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  work_resp: string;

  @Column()
  responsibility: string;

  @Column()
  requirements: string;

  @Column()
  skills: string;

  @ManyToOne(() => DepartmentEntity, dep => dep.positions)
  @JoinColumn()
  department: DepartmentEntity;

}