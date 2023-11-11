import { StageI } from "src/stage/model/stage.interface";


export interface ProgramI {
  id: number;
  name: string;
  hours:number;
  stages: StageI[];
}