import { Department } from "../department/Department";
import { Grade } from "../grade/Grade";
import { Quiz } from "../quiz/Quiz";

export type Student = {
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  grades?: Array<Grade>;
  id: string;
  name: string | null;
  quizzes?: Array<Quiz>;
  rollNumber: string | null;
  section: string | null;
  updatedAt: Date;
};
