import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { TeacherListRelationFilter } from "../teacher/TeacherListRelationFilter";

export type DepartmentWhereInput = {
  courses?: CourseListRelationFilter;
  headOfDepartment?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  students?: StudentListRelationFilter;
  teachers?: TeacherListRelationFilter;
};
