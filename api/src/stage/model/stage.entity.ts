
import { ModulEntity } from "src/modul/model/modul.entity";
import { ProgramEntity } from "src/program/model/program.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order:number;

  @OneToMany(() => ModulEntity, (modul) => modul.stage)
  @JoinColumn()
  modules: ModulEntity[]

  @ManyToOne(() => ProgramEntity, (program) => program.stages)
  @JoinColumn()
  program: ProgramEntity
}