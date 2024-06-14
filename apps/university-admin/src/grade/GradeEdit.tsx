import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { StudentTitle } from "../student/StudentTitle";

export const GradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assignment.id"
          reference="Assignment"
          label="assignment"
        >
          <SelectInput optionText={AssignmentTitle} />
        </ReferenceInput>
        <TextInput label="grade" source="grade" />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
