import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type QuizWhereInput = {
  course?: CourseWhereUniqueInput;
  description?: StringNullableFilter;
  gradedBy?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  title?: StringNullableFilter;
};
