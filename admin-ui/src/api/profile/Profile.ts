import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
