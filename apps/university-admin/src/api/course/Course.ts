import { Assignment } from "../assignment/Assignment";
import { Department } from "../department/Department";
import { Quiz } from "../quiz/Quiz";
import { Teacher } from "../teacher/Teacher";

export type Course = {
  assignments?: Array<Assignment>;
  code: string | null;
  createdAt: Date;
  department?: Department | null;
  id: string;
  name: string | null;
  quizzes?: Array<Quiz>;
  section: string | null;
  teacher?: Teacher | null;
  updatedAt: Date;
};
