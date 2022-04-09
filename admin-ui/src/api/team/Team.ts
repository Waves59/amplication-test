import { Project } from "../project/Project";
import { User } from "../user/User";

export type Team = {
  createdAt: Date;
  id: string;
  projects?: Array<Project>;
  updatedAt: Date;
  users?: Array<User>;
};
