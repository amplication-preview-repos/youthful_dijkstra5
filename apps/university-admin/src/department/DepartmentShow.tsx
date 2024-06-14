import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEPARTMENT_TITLE_FIELD } from "./DepartmentTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const DepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="headOfDepartment" source="headOfDepartment" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Course"
          target="departmentId"
          label="Courses"
        >
          <Datagrid rowClick="show">
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="department"
              source="department.id"
              reference="Department"
            >
              <TextField source={DEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="section" source="section" />
            <ReferenceField
              label="teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Student"
          target="departmentId"
          label="Students"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Teacher"
          target="departmentId"
          label="Teachers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="department"
              source="department.id"
              reference="Department"
            >
              <TextField source={DEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="email" source="email" />
            <TextField label="employeeId" source="employeeId" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
