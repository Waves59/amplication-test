import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { TeamUpdateManyWithoutUsersInput } from "./TeamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profile?: ProfileWhereUniqueInput | null;
  roles?: Array<string>;
  teams?: TeamUpdateManyWithoutUsersInput;
  username?: string;
};
