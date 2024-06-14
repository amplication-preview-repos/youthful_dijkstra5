import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";

export type StudentWhereInput = {
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  quizzes?: QuizListRelationFilter;
  rollNumber?: StringNullableFilter;
  section?: StringNullableFilter;
};
