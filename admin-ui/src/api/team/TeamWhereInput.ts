import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  projects?: ProjectListRelationFilter;
};
