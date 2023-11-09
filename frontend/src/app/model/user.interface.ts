import Role from "./role.enum";

export interface UserI {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  roles?: Role[];
}