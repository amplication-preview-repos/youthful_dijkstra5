import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { DepartmentModule } from "./department/department.module";
import { TeacherModule } from "./teacher/teacher.module";
import { CourseModule } from "./course/course.module";
import { GradeModule } from "./grade/grade.module";
import { QuizModule } from "./quiz/quiz.module";
import { AssignmentModule } from "./assignment/assignment.module";
import { SectionModule } from "./section/section.module";
import { AcademicYearModule } from "./academicYear/academicYear.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StudentModule,
    DepartmentModule,
    TeacherModule,
    CourseModule,
    GradeModule,
    QuizModule,
    AssignmentModule,
    SectionModule,
    AcademicYearModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
