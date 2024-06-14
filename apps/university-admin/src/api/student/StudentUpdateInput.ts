import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { GradeUpdateManyWithoutStudentsInput } from "./GradeUpdateManyWithoutStudentsInput";
import { QuizUpdateManyWithoutStudentsInput } from "./QuizUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  grades?: GradeUpdateManyWithoutStudentsInput;
  name?: string | null;
  quizzes?: QuizUpdateManyWithoutStudentsInput;
  rollNumber?: string | null;
  section?: string | null;
};
