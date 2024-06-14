import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSIGNMENT_TITLE_FIELD } from "../assignment/AssignmentTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="rollNumber" source="rollNumber" />
        <TextField label="section" source="section" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Grade" target="studentId" label="Grades">
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
        <ReferenceManyField reference="Quiz" target="studentId" label="Quizzes">
          <Datagrid rowClick="show">
            <ReferenceField
              label="course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="gradedBy" source="gradedBy" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
