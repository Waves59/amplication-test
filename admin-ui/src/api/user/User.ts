import { Profile } from "../profile/Profile";
import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profile?: Profile | null;
  roles: Array<string>;
  teams?: Array<Team>;
  updatedAt: Date;
  username: string;
};
