import { Assignment } from "../assignment/Assignment";
import { Student } from "../student/Student";

export type Grade = {
  assignment?: Assignment | null;
  createdAt: Date;
  grade: string | null;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
