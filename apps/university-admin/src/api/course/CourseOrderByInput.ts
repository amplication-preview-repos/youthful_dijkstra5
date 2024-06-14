import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  section?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};
