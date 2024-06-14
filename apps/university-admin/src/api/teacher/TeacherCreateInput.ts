import { CourseCreateNestedManyWithoutTeachersInput } from "./CourseCreateNestedManyWithoutTeachersInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type TeacherCreateInput = {
  courses?: CourseCreateNestedManyWithoutTeachersInput;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  employeeId?: string | null;
  name?: string | null;
};
