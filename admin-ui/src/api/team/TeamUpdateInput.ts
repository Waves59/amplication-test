import { ProjectUpdateManyWithoutTeamsInput } from "./ProjectUpdateManyWithoutTeamsInput";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  projects?: ProjectUpdateManyWithoutTeamsInput;
  users?: UserUpdateManyWithoutTeamsInput;
};
