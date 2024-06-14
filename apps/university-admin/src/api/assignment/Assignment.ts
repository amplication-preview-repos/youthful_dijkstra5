import { Course } from "../course/Course";
import { Grade } from "../grade/Grade";

export type Assignment = {
  course?: Course | null;
  createdAt: Date;
  description: string | null;
  gradedBy: string | null;
  grades?: Array<Grade>;
  id: string;
  submittedBy: string | null;
  title: string | null;
  updatedAt: Date;
};
