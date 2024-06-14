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
import { Section } from "./Section";
import { SectionCountArgs } from "./SectionCountArgs";
import { SectionFindManyArgs } from "./SectionFindManyArgs";
import { SectionFindUniqueArgs } from "./SectionFindUniqueArgs";
import { DeleteSectionArgs } from "./DeleteSectionArgs";
import { SectionService } from "../section.service";
@graphql.Resolver(() => Section)
export class SectionResolverBase {
  constructor(protected readonly service: SectionService) {}

  async _sectionsMeta(
    @graphql.Args() args: SectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Section])
  async sections(
    @graphql.Args() args: SectionFindManyArgs
  ): Promise<Section[]> {
    return this.service.sections(args);
  }

  @graphql.Query(() => Section, { nullable: true })
  async section(
    @graphql.Args() args: SectionFindUniqueArgs
  ): Promise<Section | null> {
    const result = await this.service.section(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Section)
  async deleteSection(
    @graphql.Args() args: DeleteSectionArgs
  ): Promise<Section | null> {
    try {
      return await this.service.deleteSection(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
