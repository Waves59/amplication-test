import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  user?: UserWhereUniqueInput;
};
