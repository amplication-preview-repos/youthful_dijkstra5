import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AssignmentTitle } from "../assignment/AssignmentTitle";
import { StudentTitle } from "../student/StudentTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
