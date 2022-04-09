import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
