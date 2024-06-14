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

import { CourseTitle } from "../course/CourseTitle";
import { GradeTitle } from "../grade/GradeTitle";

export const AssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="gradedBy" source="gradedBy" />
        <ReferenceArrayInput
          source="grades"
          reference="Grade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GradeTitle} />
        </ReferenceArrayInput>
        <TextInput label="submittedBy" source="submittedBy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
