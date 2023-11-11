
import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AboutEmployeeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  about: string;

  @Column()
  skills: string;

  @Column()
  rezume: string;

  @Column()
  exp: string;

  @Column()
  userId: number
}