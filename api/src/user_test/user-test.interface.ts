import TestStatus from "./test-status.enum";

export interface UserTestI {

  id: number;

  testId:number;

  userId:number;

  status: TestStatus;
}