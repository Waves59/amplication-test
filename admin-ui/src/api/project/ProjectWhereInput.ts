import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
  title?: StringFilter;
};
