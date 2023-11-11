import { TestI } from "src/course-test/model/test.interface";
import { StageI } from "src/stage/model/stage.interface";


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