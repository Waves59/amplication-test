import { ProjectCreateNestedManyWithoutTeamsInput } from "./ProjectCreateNestedManyWithoutTeamsInput";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  projects?: ProjectCreateNestedManyWithoutTeamsInput;
  users?: UserCreateNestedManyWithoutTeamsInput;
};
