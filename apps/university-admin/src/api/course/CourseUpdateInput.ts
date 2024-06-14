import { AssignmentUpdateManyWithoutCoursesInput } from "./AssignmentUpdateManyWithoutCoursesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { QuizUpdateManyWithoutCoursesInput } from "./QuizUpdateManyWithoutCoursesInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseUpdateInput = {
  assignments?: AssignmentUpdateManyWithoutCoursesInput;
  code?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  name?: string | null;
  quizzes?: QuizUpdateManyWithoutCoursesInput;
  section?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
