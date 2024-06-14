import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";
import { GradeTitle } from "../grade/GradeTitle";
import { QuizTitle } from "../quiz/QuizTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="grades"
          reference="Grade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GradeTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="quizzes"
          reference="Quiz"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuizTitle} />
        </ReferenceArrayInput>
        <TextInput label="rollNumber" source="rollNumber" />
        <TextInput label="section" source="section" />
      </SimpleForm>
    </Edit>
  );
};
