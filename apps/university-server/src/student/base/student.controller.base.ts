/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StudentService } from "../student.service";
import { StudentCreateInput } from "./StudentCreateInput";
import { Student } from "./Student";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentUpdateInput } from "./StudentUpdateInput";
import { GradeFindManyArgs } from "../../grade/base/GradeFindManyArgs";
import { Grade } from "../../grade/base/Grade";
import { GradeWhereUniqueInput } from "../../grade/base/GradeWhereUniqueInput";
import { QuizFindManyArgs } from "../../quiz/base/QuizFindManyArgs";
import { Quiz } from "../../quiz/base/Quiz";
import { QuizWhereUniqueInput } from "../../quiz/base/QuizWhereUniqueInput";

export class StudentControllerBase {
  constructor(protected readonly service: StudentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Student })
  async createStudent(
    @common.Body() data: StudentCreateInput
  ): Promise<Student> {
    return await this.service.createStudent({
      data: {
        ...data,

        department: data.department
          ? {
              connect: data.department,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        name: true,
        rollNumber: true,
        section: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Student] })
  @ApiNestedQuery(StudentFindManyArgs)
  async students(@common.Req() request: Request): Promise<Student[]> {
    const args = plainToClass(StudentFindManyArgs, request.query);
    return this.service.students({
      ...args,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        name: true,
        rollNumber: true,
        section: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async student(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    const result = await this.service.student({
      where: params,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        name: true,
        rollNumber: true,
        section: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudent(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() data: StudentUpdateInput
  ): Promise<Student | null> {
    try {
      return await this.service.updateStudent({
        where: params,
        data: {
          ...data,

          department: data.department
            ? {
                connect: data.department,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          email: true,
          id: true,
          name: true,
          rollNumber: true,
          section: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Student })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudent(
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Student | null> {
    try {
      return await this.service.deleteStudent({
        where: params,
        select: {
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          email: true,
          id: true,
          name: true,
          rollNumber: true,
          section: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/grades")
  @ApiNestedQuery(GradeFindManyArgs)
  async findGrades(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Grade[]> {
    const query = plainToClass(GradeFindManyArgs, request.query);
    const results = await this.service.findGrades(params.id, {
      ...query,
      select: {
        assignment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        grade: true,
        id: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/grades")
  async connectGrades(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        connect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/grades")
  async updateGrades(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        set: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/grades")
  async disconnectGrades(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: GradeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      grades: {
        disconnect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/quizzes")
  @ApiNestedQuery(QuizFindManyArgs)
  async findQuizzes(
    @common.Req() request: Request,
    @common.Param() params: StudentWhereUniqueInput
  ): Promise<Quiz[]> {
    const query = plainToClass(QuizFindManyArgs, request.query);
    const results = await this.service.findQuizzes(params.id, {
      ...query,
      select: {
        course: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        gradedBy: true,
        id: true,

        student: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/quizzes")
  async connectQuizzes(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: QuizWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quizzes: {
        connect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quizzes")
  async updateQuizzes(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: QuizWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quizzes: {
        set: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quizzes")
  async disconnectQuizzes(
    @common.Param() params: StudentWhereUniqueInput,
    @common.Body() body: QuizWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quizzes: {
        disconnect: body,
      },
    };
    await this.service.updateStudent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
