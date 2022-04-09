import { Team } from "../team/Team";

export type Project = {
  content: string | null;
  createdAt: Date;
  id: string;
  team?: Team | null;
  title: string;
  updatedAt: Date;
};
