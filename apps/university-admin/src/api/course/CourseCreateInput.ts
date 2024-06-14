import { AssignmentCreateNestedManyWithoutCoursesInput } from "./AssignmentCreateNestedManyWithoutCoursesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { QuizCreateNestedManyWithoutCoursesInput } from "./QuizCreateNestedManyWithoutCoursesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseCreateInput = {
  assignments?: AssignmentCreateNestedManyWithoutCoursesInput;
  code?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  name?: string | null;
  quizzes?: QuizCreateNestedManyWithoutCoursesInput;
  section?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
