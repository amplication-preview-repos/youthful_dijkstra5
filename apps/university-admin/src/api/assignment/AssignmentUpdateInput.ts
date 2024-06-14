import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GradeUpdateManyWithoutAssignmentsInput } from "./GradeUpdateManyWithoutAssignmentsInput";

export type AssignmentUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  gradedBy?: string | null;
  grades?: GradeUpdateManyWithoutAssignmentsInput;
  submittedBy?: string | null;
  title?: string | null;
};
