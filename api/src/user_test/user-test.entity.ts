
import { ModulEntity } from "src/modul/model/modul.entity";
import { ProgramEntity } from "src/program/model/program.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import TestStatus from "./test-status.enum";

@Entity()
export class UserTestEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  testId:number;

  @Column()
  userId:number;

  @Column({
    type: 'enum',
    enum: TestStatus,
    array: true,
    default: [TestStatus.in_progress]
  })
  status: TestStatus;
}