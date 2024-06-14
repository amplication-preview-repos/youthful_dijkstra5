/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Quiz } from "./Quiz";
import { QuizCountArgs } from "./QuizCountArgs";
import { QuizFindManyArgs } from "./QuizFindManyArgs";
import { QuizFindUniqueArgs } from "./QuizFindUniqueArgs";
import { CreateQuizArgs } from "./CreateQuizArgs";
import { UpdateQuizArgs } from "./UpdateQuizArgs";
import { DeleteQuizArgs } from "./DeleteQuizArgs";
import { Course } from "../../course/base/Course";
import { Student } from "../../student/base/Student";
import { QuizService } from "../quiz.service";
@graphql.Resolver(() => Quiz)
export class QuizResolverBase {
  constructor(protected readonly service: QuizService) {}

  async _quizzesMeta(
    @graphql.Args() args: QuizCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Quiz])
  async quizzes(@graphql.Args() args: QuizFindManyArgs): Promise<Quiz[]> {
    return this.service.quizzes(args);
  }

  @graphql.Query(() => Quiz, { nullable: true })
  async quiz(@graphql.Args() args: QuizFindUniqueArgs): Promise<Quiz | null> {
    const result = await this.service.quiz(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Quiz)
  async createQuiz(@graphql.Args() args: CreateQuizArgs): Promise<Quiz> {
    return await this.service.createQuiz({
      ...args,
      data: {
        ...args.data,

        course: args.data.course
          ? {
              connect: args.data.course,
            }
          : undefined,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Quiz)
  async updateQuiz(@graphql.Args() args: UpdateQuizArgs): Promise<Quiz | null> {
    try {
      return await this.service.updateQuiz({
        ...args,
        data: {
          ...args.data,

          course: args.data.course
            ? {
                connect: args.data.course,
              }
            : undefined,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Quiz)
  async deleteQuiz(@graphql.Args() args: DeleteQuizArgs): Promise<Quiz | null> {
    try {
      return await this.service.deleteQuiz(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Course, {
    nullable: true,
    name: "course",
  })
  async getCourse(@graphql.Parent() parent: Quiz): Promise<Course | null> {
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Student, {
    nullable: true,
    name: "student",
  })
  async getStudent(@graphql.Parent() parent: Quiz): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
