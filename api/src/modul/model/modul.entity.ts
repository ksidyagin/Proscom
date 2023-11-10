
import { TestEntity } from "src/course-test/model/test.entity";
import { StageEntity } from "src/stage/model/stage.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ModulEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  descr: string;

  @Column()
  hours:number;

  @Column()
  difficulty: string;

  @OneToOne(() => TestEntity)
  @JoinColumn()
  test: TestEntity;

  @ManyToOne(() => StageEntity, (stage) => stage.modules)
  @JoinColumn()
  stage: StageEntity
}