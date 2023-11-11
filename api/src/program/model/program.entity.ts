
import { StageEntity } from "src/stage/model/stage.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProgramEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hours:number;

  @OneToMany(() => StageEntity, (stage) => stage.program)
  @JoinColumn()
  stages: StageEntity[]
}