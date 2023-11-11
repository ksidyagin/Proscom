import { ModulI } from "src/modul/model/modul.interface";


export interface StageI {

  id?: number;

  name?: string;

  order?:number;

  modules?: ModulI[]
}