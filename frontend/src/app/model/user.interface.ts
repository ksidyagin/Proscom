import Role from "./role.enum";

export interface UserI {
  id?: number;
  username?: string;
  email: string;
  password?: string;
  roles?: Role[];
  first_name?: string;
  second_name?:string;
  third_name?:string;
  birthday?: string;
  avatar_url?:string;
  sex?:string;
  kpi?:number;
}