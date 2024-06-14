import { Grade as TGrade } from "../api/grade/Grade";

export const GRADE_TITLE_FIELD = "grade";

export const GradeTitle = (record: TGrade): string => {
  return record.grade?.toString() || String(record.id);
};
