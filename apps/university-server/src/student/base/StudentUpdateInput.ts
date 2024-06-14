/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { GradeUpdateManyWithoutStudentsInput } from "./GradeUpdateManyWithoutStudentsInput";
import { QuizUpdateManyWithoutStudentsInput } from "./QuizUpdateManyWithoutStudentsInput";

@InputType()
class StudentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartmentWhereUniqueInput, {
    nullable: true,
  })
  department?: DepartmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => GradeUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => GradeUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => GradeUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  grades?: GradeUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => QuizUpdateManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => QuizUpdateManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => QuizUpdateManyWithoutStudentsInput, {
    nullable: true,
  })
  quizzes?: QuizUpdateManyWithoutStudentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rollNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  section?: string | null;
}

export { StudentUpdateInput as StudentUpdateInput };
