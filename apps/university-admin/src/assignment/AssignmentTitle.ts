import { Assignment as TAssignment } from "../api/assignment/Assignment";

export const ASSIGNMENT_TITLE_FIELD = "title";

export const AssignmentTitle = (record: TAssignment): string => {
  return record.title?.toString() || String(record.id);
};
