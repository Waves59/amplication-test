import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectUpdateInput = {
  content?: string | null;
  team?: TeamWhereUniqueInput | null;
  title?: string;
};
