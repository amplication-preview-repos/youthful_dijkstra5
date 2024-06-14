import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssignmentWhereInput = {
  course?: CourseWhereUniqueInput;
  description?: StringNullableFilter;
  gradedBy?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  submittedBy?: StringNullableFilter;
  title?: StringNullableFilter;
};
