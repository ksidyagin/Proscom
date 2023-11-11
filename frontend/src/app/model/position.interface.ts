import { DepartmentI } from "./department.interface";

export interface PositionI {

  id?: number;

  name?: string;

  work_resp?: string;

  responsibility?: string;

  requirements?: string;

  skills?: string;

  department?: DepartmentI;

}