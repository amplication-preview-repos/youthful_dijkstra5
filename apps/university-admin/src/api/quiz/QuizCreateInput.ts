import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type QuizCreateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  gradedBy?: string | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
