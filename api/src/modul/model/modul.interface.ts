import { TestI } from "src/course-test/model/test.interface";


export class ModulI {

  id?: number;


  name?: string;


  descr?: string;


  hours?:number;


  difficulty?: string;


  test?: TestI;

}