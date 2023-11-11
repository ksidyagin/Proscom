import { StageI } from "./stage.interface";

export interface ProgramI {
  id: number;
  name: string;
  hours:number;
  stages: StageI[];
}