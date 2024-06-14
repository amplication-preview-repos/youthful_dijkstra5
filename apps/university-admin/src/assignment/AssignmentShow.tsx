import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSIGNMENT_TITLE_FIELD } from "./AssignmentTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const AssignmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="gradedBy" source="gradedBy" />
        <TextField label="ID" source="id" />
        <TextField label="submittedBy" source="submittedBy" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Grade"
          target="assignmentId"
          label="Grades"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="assignment"
              source="assignment.id"
              reference="Assignment"
            >
              <TextField source={ASSIGNMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="grade" source="grade" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
