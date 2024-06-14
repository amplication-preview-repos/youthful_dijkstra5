import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { GradeList } from "./grade/GradeList";
import { GradeCreate } from "./grade/GradeCreate";
import { GradeEdit } from "./grade/GradeEdit";
import { GradeShow } from "./grade/GradeShow";
import { QuizList } from "./quiz/QuizList";
import { QuizCreate } from "./quiz/QuizCreate";
import { QuizEdit } from "./quiz/QuizEdit";
import { QuizShow } from "./quiz/QuizShow";
import { AssignmentList } from "./assignment/AssignmentList";
import { AssignmentCreate } from "./assignment/AssignmentCreate";
import { AssignmentEdit } from "./assignment/AssignmentEdit";
import { AssignmentShow } from "./assignment/AssignmentShow";
import { SectionList } from "./section/SectionList";
import { SectionCreate } from "./section/SectionCreate";
import { SectionEdit } from "./section/SectionEdit";
import { SectionShow } from "./section/SectionShow";
import { AcademicYearList } from "./academicYear/AcademicYearList";
import { AcademicYearCreate } from "./academicYear/AcademicYearCreate";
import { AcademicYearEdit } from "./academicYear/AcademicYearEdit";
import { AcademicYearShow } from "./academicYear/AcademicYearShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"university"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Grade"
          list={GradeList}
          edit={GradeEdit}
          create={GradeCreate}
          show={GradeShow}
        />
        <Resource
          name="Quiz"
          list={QuizList}
          edit={QuizEdit}
          create={QuizCreate}
          show={QuizShow}
        />
        <Resource
          name="Assignment"
          list={AssignmentList}
          edit={AssignmentEdit}
          create={AssignmentCreate}
          show={AssignmentShow}
        />
        <Resource
          name="Section"
          list={SectionList}
          edit={SectionEdit}
          create={SectionCreate}
          show={SectionShow}
        />
        <Resource
          name="AcademicYear"
          list={AcademicYearList}
          edit={AcademicYearEdit}
          create={AcademicYearCreate}
          show={AcademicYearShow}
        />
      </Admin>
    </div>
  );
};

export default App;
