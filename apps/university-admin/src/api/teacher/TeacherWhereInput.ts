import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  courses?: CourseListRelationFilter;
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  employeeId?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
