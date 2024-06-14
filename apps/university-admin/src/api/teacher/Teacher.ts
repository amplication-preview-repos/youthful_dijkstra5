import { Course } from "../course/Course";
import { Department } from "../department/Department";

export type Teacher = {
  courses?: Array<Course>;
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  employeeId: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
