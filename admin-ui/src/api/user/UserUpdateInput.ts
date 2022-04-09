import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { TeamUpdateManyWithoutUsersInput } from "./TeamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  teams?: TeamUpdateManyWithoutUsersInput;
  username?: string;
};
