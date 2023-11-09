import Role from "./role.enum";

export interface UserI {
  id?: number;
  username?: string;
  email: string;
  password?: string;
  roles?: Role[];
}