import { AssignmentWhereUniqueInput } from "../assignment/AssignmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GradeWhereInput = {
  assignment?: AssignmentWhereUniqueInput;
  grade?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
