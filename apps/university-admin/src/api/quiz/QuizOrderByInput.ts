import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  gradedBy?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
