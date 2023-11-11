
import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AboutHrEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @Column()
  skills: string;

  @Column()
  department: string;

  @Column()
  work_respons: string;

  @Column()
  responsibility: string;

  @Column()
  userId: number;

  @Column()
  departmentId: number;

  @Column()
  positionId: number;
}