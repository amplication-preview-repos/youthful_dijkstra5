import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rollNumber?: SortOrder;
  section?: SortOrder;
  updatedAt?: SortOrder;
};
