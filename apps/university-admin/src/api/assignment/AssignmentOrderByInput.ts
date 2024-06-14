import { SortOrder } from "../../util/SortOrder";

export type AssignmentOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  gradedBy?: SortOrder;
  id?: SortOrder;
  submittedBy?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
