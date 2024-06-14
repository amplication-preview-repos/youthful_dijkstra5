import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  assignmentId?: SortOrder;
  createdAt?: SortOrder;
  grade?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
