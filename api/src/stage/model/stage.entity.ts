
import { ModulEntity } from "src/modul/model/modul.entity";
import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}