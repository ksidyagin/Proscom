
import { PositionEntity } from "src/position/model/position.entity";
import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DepartmentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dep_num: number;

  @Column()
  short_descr: string;

  @OneToMany(() => PositionEntity, (pos) => pos.department)
  @JoinColumn()
  positions: PositionEntity[];

}