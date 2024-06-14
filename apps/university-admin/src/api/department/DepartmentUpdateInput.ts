import { CourseUpdateManyWithoutDepartmentsInput } from "./CourseUpdateManyWithoutDepartmentsInput";
import { StudentUpdateManyWithoutDepartmentsInput } from "./StudentUpdateManyWithoutDepartmentsInput";
import { TeacherUpdateManyWithoutDepartmentsInput } from "./TeacherUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  courses?: CourseUpdateManyWithoutDepartmentsInput;
  headOfDepartment?: string | null;
  name?: string | null;
  students?: StudentUpdateManyWithoutDepartmentsInput;
  teachers?: TeacherUpdateManyWithoutDepartmentsInput;
};
