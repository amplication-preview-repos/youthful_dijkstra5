import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type CourseWhereInput = {
  assignments?: AssignmentListRelationFilter;
  code?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  quizzes?: QuizListRelationFilter;
  section?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
};
