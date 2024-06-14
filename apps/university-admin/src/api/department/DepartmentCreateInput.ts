import { CourseCreateNestedManyWithoutDepartmentsInput } from "./CourseCreateNestedManyWithoutDepartmentsInput";
import { StudentCreateNestedManyWithoutDepartmentsInput } from "./StudentCreateNestedManyWithoutDepartmentsInput";
import { TeacherCreateNestedManyWithoutDepartmentsInput } from "./TeacherCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  courses?: CourseCreateNestedManyWithoutDepartmentsInput;
  headOfDepartment?: string | null;
  name?: string | null;
  students?: StudentCreateNestedManyWithoutDepartmentsInput;
  teachers?: TeacherCreateNestedManyWithoutDepartmentsInput;
};
