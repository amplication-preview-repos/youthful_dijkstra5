import { Course } from "../course/Course";
import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

export type Department = {
  courses?: Array<Course>;
  createdAt: Date;
  headOfDepartment: string | null;
  id: string;
  name: string | null;
  students?: Array<Student>;
  teachers?: Array<Teacher>;
  updatedAt: Date;
};
