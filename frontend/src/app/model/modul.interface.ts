import { StageI } from "./stage.interface";
import { TestI } from "./test.interface";

export class ModulI {

  id?: number;


  name?: string;


  descr?: string;


  hours?:string;


  difficulty?: string;


  test?: TestI;

  stage?: StageI;

  file_path?: string;
}