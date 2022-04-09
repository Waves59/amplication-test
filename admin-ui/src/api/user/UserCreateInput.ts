import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profile?: ProfileWhereUniqueInput | null;
  roles: Array<string>;
  teams?: TeamCreateNestedManyWithoutUsersInput;
  username: string;
};
