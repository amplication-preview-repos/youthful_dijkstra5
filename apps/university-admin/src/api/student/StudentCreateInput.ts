import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { GradeCreateNestedManyWithoutStudentsInput } from "./GradeCreateNestedManyWithoutStudentsInput";
import { QuizCreateNestedManyWithoutStudentsInput } from "./QuizCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  grades?: GradeCreateNestedManyWithoutStudentsInput;
  name?: string | null;
  quizzes?: QuizCreateNestedManyWithoutStudentsInput;
  rollNumber?: string | null;
  section?: string | null;
};
