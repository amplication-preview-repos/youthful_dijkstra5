import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GradeCreateInput = {
  assignment?: AssignmentWhereUniqueInput | null;
  grade?: string | null;
  student?: StudentWhereUniqueInput | null;
};
