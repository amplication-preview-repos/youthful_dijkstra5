import { Course } from "../course/Course";
import { Student } from "../student/Student";

export type Quiz = {
  course?: Course | null;
  createdAt: Date;
  description: string | null;
  gradedBy: string | null;
  id: string;
  student?: Student | null;
  title: string | null;
  updatedAt: Date;
};
