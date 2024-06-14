import { CourseUpdateManyWithoutTeachersInput } from "./CourseUpdateManyWithoutTeachersInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type TeacherUpdateInput = {
  courses?: CourseUpdateManyWithoutTeachersInput;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  employeeId?: string | null;
  name?: string | null;
};
