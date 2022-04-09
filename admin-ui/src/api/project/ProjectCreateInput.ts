import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectCreateInput = {
  content?: string | null;
  team?: TeamWhereUniqueInput | null;
  title: string;
};
