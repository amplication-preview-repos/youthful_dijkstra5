import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { GradeCreateNestedManyWithoutAssignmentsInput } from "./GradeCreateNestedManyWithoutAssignmentsInput";

export type AssignmentCreateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  gradedBy?: string | null;
  grades?: GradeCreateNestedManyWithoutAssignmentsInput;
  submittedBy?: string | null;
  title?: string | null;
};
