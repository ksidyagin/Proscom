import { ModulI } from "./modul.interface";

export interface StageI {

  id?: number;

  name?: string;

  order?:number;

  modules?: ModulI[]
}